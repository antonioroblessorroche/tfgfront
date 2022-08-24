import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ClassMaster } from 'src/app/models/classMaster';
import { DailyClasses } from 'src/app/models/dailyClasses';
import { DailyClassesMaster } from 'src/app/models/dailyClassMaster';
import { DailyClassSession } from 'src/app/models/DailyClassSession';
import { MasterDailyClasses } from 'src/app/models/masterDailyClass';
import { MasterDailyClassSession } from 'src/app/models/masterDailyClassSession';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { ClassMasterService } from 'src/app/services/classMasterService';
import { DailyClassesService } from 'src/app/services/daily-classes.service';
import { TrainingCenterService } from 'src/app/services/training-center.service';

@Component({
  selector: 'app-edit-daily-classes-master',
  templateUrl: './edit-daily-classes-master.page.html',
  styleUrls: ['./edit-daily-classes-master.page.scss'],
})
export class EditDailyClassesMasterPage implements OnInit {


  // workouts: Workout[] = [];
  workouts: ClassMaster[] = [];
  name= '';
  page: number;
  searchValue: string;
  description= '';
  slots: number;
  places: TrainingCenter[] = [];


  selectedTime : string;
  selectedWorkout: string;
  selectedPlace: string;

  dailyClassId: string;
  index: number

  session: MasterDailyClassSession;
  classes: DailyClassesMaster;


  fullSelectedWorkout: ClassMaster;
  fullSelectedPlace: TrainingCenter;

  constructor(
    private workoutService: ClassMasterService,
    private dailyClassService: DailyClassesService,
    private trainingCenterService: TrainingCenterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }


  ngOnInit() {
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
    this.dailyClassService.detalleMaster(this.dailyClassId).subscribe(
      data => {
        console.log(data);
         this.classes = data;
         this.session = data.dailyClasses[this.index];
         this.selectedTime = this.session.time;
         this.selectedPlace = this.session.location;
         this.selectedWorkout = this.session.trainingId;
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


      }, err => {
        this.volver();
      }
    )
  }

  onCreate() {
    this.dailyClassService.detalleMaster(this.dailyClassId).subscribe(
      data => {
          if (data.dailyClasses == null) {
            data.dailyClasses = [];
          }

            data.dailyClasses[this.index] = this.session;
            this.dailyClassService.actualizarMaster(data.id, data).subscribe(data => {
              this.presentToast('Clase editada correctamente');
            }, err => {
              this.presentToast('No fue posible editar la clase diaria');
            });
            this.vaciar()
            this.volver();
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

  selectTime(event) {
    this.selectedTime = event.detail.value.substring(11,16);
  }

  volver() {
    this.router.navigate(['/daily-classes-master/' + this.dailyClassId]);
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