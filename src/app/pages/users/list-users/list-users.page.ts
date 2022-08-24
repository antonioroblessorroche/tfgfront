import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, ToastController } from '@ionic/angular';
import { ReducedUser } from 'src/app/models/reducedUser';
import { Workout } from 'src/app/models/workout';
import { UserService } from 'src/app/services/user.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  users: ReducedUser[] = [];

  page = 0;
  searchValue = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }



    getWorkouts() {
      this.users = [];
      this.page = 0;
      if (this.searchValue != '') {
        this.userService.userList(this.searchValue,this.page).subscribe(
          data => {
            this.users = data.content;
          },
          err => {
            console.log("petó");
            console.log(err);
          }
        );
      } else {
        this.cargar();
      }
      this.page+=1;
      
    }

    setSearchValue(searchVal: string) {
      this.searchValue = searchVal;
    }

 

 loadData(event) {
  event.target.disabled = false;
  // if (this.searchValue != '') {
  //   this.userService.userList(this.page).subscribe(
  //     data => {
  //       let dataSize = data.content.length;
  //       if (dataSize > 0) {
  //         for (let i = 0; i< dataSize; i++) {
  //           this.workouts.push(data.content[i]);
  //         }
  //        this.page+=1;
  //       }  else {
  //         // event.target.disabled = true;
  //         event.target.complete();
  //       }        
  //     },
  //     err => {
  //       console.log("petó");
  //       console.log(err);
  //     }
  //   );
  // } else {
    this.userService.userList(this.searchValue, this.page).subscribe(
      data => {
        let dataSize = data.content.length;
        if (dataSize > 0) {
          for (let i = 0; i< dataSize; i++) {
            this.users.push(data.content[i]);
          }
         this.page+=1;
        }  else {
          // event.target.disabled = true;
          event.target.complete();
        }        
      },
      err => {
        console.log("petó");
        console.log(err);
      }
    );
  // }
  // event.target.complete();
  // event.target.disabled = true;


  
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }




  ngOnInit() {
    // this.cargar();
  }

  ionViewWillEnter() {
    // this.cargar();
    // this.page+=1;
  }

  cargar(): void {
    this.userService.userList(this.searchValue,this.page).subscribe(
      data => {
        this.users = data.content;
      },
      err => {
        console.log("petó");
        console.log(err);
      }
    );
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }


}
