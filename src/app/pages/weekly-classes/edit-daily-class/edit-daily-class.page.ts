import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IonicSelectableModule, IonicSelectableValueTemplateDirective } from 'ionic-selectable';
import { ClassMaster } from 'src/app/models/classMaster';
import { DailyClasses } from 'src/app/models/dailyClasses';
import { DailyClassSession } from 'src/app/models/DailyClassSession';
import { ReducedUser } from 'src/app/models/reducedUser';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { TrainingClassReservation } from 'src/app/models/trainingClassReservation';
import { ClassMasterService } from 'src/app/services/classMasterService';
import { DailyClassesService } from 'src/app/services/daily-classes.service';
import { TrainingCenterService } from 'src/app/services/training-center.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-daily-class',
  templateUrl: './edit-daily-class.page.html',
  styleUrls: ['./edit-daily-class.page.scss'],
})
export class EditDailyClassPage implements OnInit {

  // workouts: Workout[] = [];
  workouts: ClassMaster[] = [];
  name= '';
  page: number;
  searchValue: string;
  description= '';
  slots: number;
  places: TrainingCenter[] = [];
  classControl: FormControl;
  form: FormGroup;
  selector = 'detalle';


  selectedTime : string;
  selectedWorkout: string;
  selectedPlace: string;
  selectedUser: string;

  fullSelectedWorkout: ClassMaster;
  fullSelectedPlace: TrainingCenter;

  dailyClassId: string;
  index: number

  session: DailyClassSession;
  classes: DailyClasses;

  users: ReducedUser[] = [];

  reservations: TrainingClassReservation[] = [];

  constructor(
    private workoutService: ClassMasterService,
    private dailyClassService: DailyClassesService,
    private usuarioService: UserService,
    private trainingCenterService: TrainingCenterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }


  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.dailyClassId = this.activatedRoute.snapshot.params.id;
    this.index = this.activatedRoute.snapshot.params.index;
    console.log(this.dailyClassId);
    this.cargar();
  }

  cargar(): void {
    this.workoutService.listaCompleta().subscribe(
      data => {
        this.workouts = data.content;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
    this.trainingCenterService.lista(100).subscribe(
      data => {
        this.places = data.content;
      },
      err => {
        console.log(err);
      }
    );
    this.dailyClassId = this.activatedRoute.snapshot.params.id;
    this.dailyClassService.detalle(this.dailyClassId).subscribe(
      data => {
        console.log(data);
         this.classes = data;
         this.session = data.dailyClasses[this.index];
         this.selectedTime = data.dailyClasses[this.index].time;
         this.selectedPlace = data.dailyClasses[this.index].location;
         this.selectedWorkout = data.dailyClasses[this.index].trainingId;
         console.log("Workout " + this.selectedWorkout);

         for (let i = 0; i < this.workouts.length; i++) {
           if (this.workouts[i].id == this.selectedWorkout) {
             this.fullSelectedWorkout = this.workouts[i];
           }
         }

         for (let i = 0; i < this.places.length; i++) {
          if (this.places[i].id == this.selectedPlace) {
            this.fullSelectedPlace = this.places[i];
          }
        }

         this.dailyClassService.inscripcionesClase(this.dailyClassId, this.session.id).subscribe(
           data => {
             console.log(data);
            this.reservations = data;
         }, err => {
          this.presentToast("No pudieron cargarse las inscripciones a la sesión");
         });
      }, err => {
        this.volver();
      }
    );

    this.usuarioService.lista().subscribe(
      data => {
        console.log(data);
       this.users = data;
    }, err => {
     this.presentToast("No pudieron cargarse las inscripciones a la sesión");
    });
    

  }

  async deleteConfirm(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar inscripción',
      message: 'Confmirmar la eliminación de la inscripción de usuario en clase',
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

  borrar(id: string) {
    console.log(id);
    let reservation = null;
    for (let i = 0; i < this.reservations.length; i++) {
      if (this.reservations[i].id == id) {
        reservation = this.reservations[i];
        this.dailyClassService.eliminacionAdmin(reservation.classId, reservation.user, reservation.sessionId).subscribe(
          data => {
            this.presentToast('Se ha eliminado la inscripción en la clase.');
            
            this.ionViewWillEnter();
          }, err => {
            this.presentToast('No ha podido eliminarse su inscripción en la clase.');
          }
        );
      }
    }
  }

  addUser() {
    this.dailyClassService.inscripcion(this.activatedRoute.snapshot.params.id, this.selectedUser, this.session.id).subscribe(
      data => {
        this.presentToast('Usuario inscrito correctamente');
        this.cargar();
        this.selectedUser = '';
      },   
      err => {
       this.presentToast(err.error.mensaje);
     }
    )
    
  }


  segmentChanged($event) {
    this.selector = $event.detail.value;
    console.log($event.detail.value);
  }

  onCreate() {
    this.dailyClassService.detalle(this.dailyClassId).subscribe(
      data => {
          if (data.dailyClasses == null) {
            data.dailyClasses = [];
          }

          if (this.session.reservations > this.session.slots) {
            this.presentToast('No pudo editarse la clase. Actualmente existen más reservas que plazas disponibles. Incremente el número de plazas al menos hasta ' + this.session.reservations);
          } else {
            var sessionDetail = new DailyClassSession(this.selectedWorkout, this.description, this.selectedTime, this.slots, this.selectedPlace, null, null);
            data.dailyClasses[this.index] = this.session;
            this.dailyClassService.actualizar(data.id, data).subscribe(data => {
              this.presentToast('Clase editada correctamente');
            }, err => {
              this.presentToast('No fue posible editar la clase diaria');
            });
            this.vaciar()
            this.volver();
          }
        },   
       err => {
        this.presentToast(err.error.mensaje);
      }
    )
  }


  vaciar() {
    this.description= '';
    this.selectedTime = '';
    this.selectedWorkout = '';
    this.selectedUser = '';
  }
  


  formatDate(value: string) {
    console.log(value);
  }

  selectId(event) {
   this.selectedWorkout = event.value.id;
   console.log("Ejercicio seleccionado: " + this.selectedWorkout + " " + event.value.name);
    
  }

  selectCenterId(event) {
    this.selectedPlace = event.value.id;
    console.log("Centro seleccionado: " + this.selectedWorkout + " " + event.value.name);
     
   }

   selectUserId(event) {
    this.selectedUser = event.value.nombreUsuario;
    console.log("Usuario seleccionado: " + this.selectedUser + " " + event.value.name);
   }

  selectTime(event) {
    this.selectedTime = event.detail.value.substring(11,16);
  }

  volver() {
    this.router.navigate(['/detail-daily-class/' + this.dailyClassId]);
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
