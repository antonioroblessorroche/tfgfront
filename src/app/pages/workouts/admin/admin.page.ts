import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, IonInfiniteScroll } from '@ionic/angular';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  workouts: Workout[] = [];

  page = 0;
  searchValue = '';

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }



    getWorkouts() {
      this.workouts = [];
      this.page = 0;
      if (this.searchValue != '') {
        this.workoutService.listaByName(this.page, this.searchValue).subscribe(
          data => {
            this.workouts = data.content;
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
  if (this.searchValue != '') {
    this.workoutService.lista(this.page).subscribe(
      data => {
        let dataSize = data.content.length;
        if (dataSize > 0) {
          for (let i = 0; i< dataSize; i++) {
            this.workouts.push(data.content[i]);
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
  } else {
    this.workoutService.listaByName(this.page, this.searchValue).subscribe(
      data => {
        let dataSize = data.content.length;
        if (dataSize > 0) {
          for (let i = 0; i< dataSize; i++) {
            this.workouts.push(data.content[i]);
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
  }
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
    this.workoutService.lista(this.page).subscribe(
      data => {
        this.workouts = data.content;
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

  borrar(id: string) {
    this.workoutService.delete(id).subscribe(
      data => {
        this.presentToast('Item borrado correctamente');
        this.cargar();
      },
      err => {
        this.presentToast('Error borrando item');
      }
    )
  }

  async deleteConfirm(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Borrado de datos',
      message: 'Confirmación de borrado de datos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
           this.borrar(id);
          }
        }
      ]
    });

    await alert.present();
  }


}
