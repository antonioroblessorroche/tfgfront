import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, ToastController } from '@ionic/angular';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.page.html',
  styleUrls: ['./list-news.page.scss'],
})
export class ListNewsPage implements OnInit {


  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor( private service: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private tokenService: TokenService) { }

  isAdmin = false;
  page: 0;
  allNews: News[] = [];

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.page = 0;
    this.cargar();
    this.page+=1;
    this.isAdmin = this.tokenService.getAuthorities().length > 1;
  }

  cargar(): void {
      this.service.lista(this.page).subscribe(
        data => {
          this.allNews = data.content;
          for (let i = 0; i < this.allNews.length; i++) {
            this.allNews[i].parsedDate = this.formatDate(this.allNews[i].date);
          }

        },
        err => {
          console.log(err);
        }
      );
  }

  formatDate(date: number) {
    return new Date(date).toLocaleString();
  }

  cargarData(event: any) {
    event.target.disabled = false;
 this.service.lista(this.page).subscribe(
     data => {
       console.log(data);
         let dataSize = data.content.length;
         if (dataSize > 0) {
             for (let i = 0; i < dataSize; i++) {
                 this.allNews.push(data.content[i]);
             }
             this.page += 1;
         } else {
             event.target.complete();
         }
     },
     err => {
         console.log("petó");
         console.log(err);
     }
 );
}


  loadData(event) {
    event.target.disabled = false;
      this.cargarData(event);
      setTimeout(() => {
        event.target.complete();
      }, 500);
    }


toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

}
