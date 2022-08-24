import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController, IonInfiniteScroll } from '@ionic/angular';
import { TrainingClass } from 'src/app/models/trainingClass';
import { TrainingSession } from 'src/app/models/trainingSession';
import { SessionService } from 'src/app/services/session.service';
import { TrainingClassService } from 'src/app/services/trainingclass.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-classes.page.html',
  styleUrls: ['./admin-classes.page.scss'],
})
export class AdminClassesPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  trainingClass: TrainingClass[] = [];

  page = 0;
  searchValue = '';
  day: number;
  month: number;
  year: number;
  date: Date;
  isEmpty = true;

  constructor(
    private trainingClassService: TrainingClassService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }



    // getWorkouts() {
    //   this.trainingClass = [];
    //   this.page = 0;
    //   if (this.searchValue != '') {
    //     this.trainingClassService.listaByName(this.page, this.searchValue).subscribe(
    //       data => {
    //         this.trainingClass = data.content;
    //       },
    //       err => {
    //         console.log("petó");
    //         console.log(err);
    //       }
    //     );
    //   } else {
    //     this.cargar();
    //   }
    //   this.page+=1;
      
    // }


    ngOnInit() {
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.cargar();
      }
    
      cargar(): void {
        const id = this.activatedRoute.snapshot.params.id;
        var todayMidnight = new Date(this.year, this.month - 1, this.day).getTime();
        this.trainingClassService.listaByStartEndDate(0, todayMidnight, (todayMidnight + 86400000)).subscribe(
          data => {
           this.trainingClass = data.content;
            for (var i=0; i <this.trainingClass.length; i++) {
             this.trainingClass[i].date = new Date(this.trainingClass[i].timeStart).toLocaleTimeString();
            }
          }, err => {
            this.volver();
          }
        )
      }
    
    
      getWorkouts() {
       this.trainingClass = [];
        this.page = 0;
        var pickDate = new Date(this.year, this.month -1, this.day).getTime();
        if (this.searchValue != '') {
          this.trainingClassService.listaByStartEndDateAndName(0, pickDate, (pickDate + 86400000), this.searchValue).subscribe(
            data => {
             this.trainingClass = data.content;
              this.isEmpty = data.content === [];
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

    volver() {
        this.router.navigate(['/']);
      }
    

 loadData(event) {
  event.target.disabled = false;
  if (this.searchValue != '') {
    this.byName(event);
  } else {
    //this.all(event);
    this.byName(event);
  }
  // event.target.complete();
  // event.target.disabled = true;


  
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

    // private all(event: any) {
    //     this.trainingClassService.listaByName(this.page, this.searchValue).subscribe(
    //         data => {
    //             let dataSize = data.content.length;
    //             if (dataSize > 0) {
    //                 for (let i = 0; i < dataSize; i++) {
    //                     this.trainingClass.push(data.content[i]);
    //                 }
    //                 this.page += 1;
    //             } else {
    //                 // event.target.disabled = true;
    //                 event.target.complete();
    //             }
    //         },
    //         err => {
    //             console.log("petó");
    //             console.log(err);
    //         }
    //     );
    // }

    private byName(event: any) {
        this.trainingClassService.lista(this.page).subscribe(
            data => {
                let dataSize = data.content.length;
                if (dataSize > 0) {
                    for (let i = 0; i < dataSize; i++) {
                        this.trainingClass.push(data.content[i]);
                    }
                    this.page += 1;
                } else {
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

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }




//   ngOnInit() {
//     // this.cargar();
//   }

  ionViewWillEnter() {
    // this.cargar();
    // this.page+=1;
  }

//   cargar(): void {
//     this.trainingClassService.lista(this.page).subscribe(
//       data => {
//         this.trainingClasss = data.content;
//       },
//       err => {
//         console.log("petó");
//         console.log(err);
//       }
//     );
//   }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  borrar(id: string) {
    this.trainingClassService.delete(id).subscribe(
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
