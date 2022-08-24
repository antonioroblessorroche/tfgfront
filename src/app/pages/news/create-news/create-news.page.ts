import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.page.html',
  styleUrls: ['./create-news.page.scss'],
})
export class CreateNewsPage implements OnInit {

  constructor(private service: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

    news: News = new News(null, '', '', 0);

  ngOnInit() {
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  onCreate() {
   this.crear();
  }

  volver() {
    this.router.navigate(['/list-news']);
  }

  crear() {
    this.news.date = new Date().getTime();
    this.service.nuevo(this.news).subscribe(data => {
      console.log(data);
      this.presentToast('Creada nueva noticia');
      this.volver();
    }, err => {
      this.presentToast('No pudo crearse noticia.');
    })
  }

}
