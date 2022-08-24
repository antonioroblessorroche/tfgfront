import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, ToastController } from '@ionic/angular';
import { WeeklyClassMaster } from 'src/app/models/WeeklyClassMaster';
import { WeeklyClassesMasterServiceService } from 'src/app/services/weekly-classes-master-service.service';

@Component({
  selector: 'app-weekly-classes',
  templateUrl: './weekly-classes.page.html',
  styleUrls: ['./weekly-classes.page.scss'],
})
export class WeeklyClassesPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  trainingClass: WeeklyClassMaster[] = [];

  page = 0;
  searchValue = '';
  day: number;
  month: number;
  year: number;
  date: Date;
  isEmpty = true;
  mondayData : Date[]=[];

  constructor(
    private classService: WeeklyClassesMasterServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

    ngOnInit() {
        
      }
    
      cargar(): void {
        const id = this.activatedRoute.snapshot.params.id;
        var todayMidnight = new Date(this.year, this.month - 1, this.day).getTime();
        this.classService.lista(0).subscribe(
          data => {
           this.trainingClass = data.content;
          }, err => {
            this.volver();
          }
        )
      }

      createNew() {
        this.classService.generar().subscribe(
          data => {
            this.presentToast('Nueva clase maestra semanal generada correctamente.')
            this.cargar();
          }, err => {
            this.presentToast('Error generando nueva clase maestra semanal.')
            this.volver();
          }
        );
      }
    
    
      getWorkouts() {
       this.trainingClass = [];
        this.page = 0;
        var pickDate = new Date(this.year, this.month -1, this.day).getTime();
        if (this.searchValue != '') {
          this.classService.listaByName(0, this.searchValue).subscribe(
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
    this.byName(event);
  }


  
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
    private byName(event: any) {
        this.classService.lista(this.page).subscribe(
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

  ionViewWillEnter() {
    this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.cargar();
        this.getMondays()
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
    this.classService.delete(id).subscribe(
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


  getMondays() {
    var day_info = 8.64e+7
    var d = new Date();
    d.setDate(d.getDate() + ((7-d.getDay())%7+1) % 7);
    for (let i = 0; i < 12; i++) {
      this.mondayData.push(new Date(d.getTime() + day_info*7*i));
    }
    console.log(this.mondayData);
  }

}
