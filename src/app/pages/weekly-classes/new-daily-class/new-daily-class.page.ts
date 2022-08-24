import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ClassMaster } from 'src/app/models/classMaster';
import { DailyClassSession } from 'src/app/models/DailyClassSession';
import { MasterDailyClassSession } from 'src/app/models/masterDailyClassSession';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { TrainingClass } from 'src/app/models/trainingClass';
import { ClassMasterService } from 'src/app/services/classMasterService';
import { DailyClassesService } from 'src/app/services/daily-classes.service';
import { TrainingCenterService } from 'src/app/services/training-center.service';

@Component({
  selector: 'app-new-daily-class',
  templateUrl: './new-daily-class.page.html',
  styleUrls: ['./new-daily-class.page.scss'],
})
export class NewDailyClassPage implements OnInit {


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
    console.log(this.dailyClassId);
    this.cargar();
  }

  cargar(): void {
    this.workoutService.listaCompleta().subscribe(
      data => {
        this.workouts = data.content;
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
  }

  onCreate() {
    this.dailyClassService.detalle(this.dailyClassId).subscribe(
      data => {
          if (data.dailyClasses == null) {
            data.dailyClasses = [];
          }
            var sessionDetail = new DailyClassSession(this.selectedWorkout, this.description, this.selectedTime, this.slots, this.selectedPlace, null, null);
            data.dailyClasses.push(sessionDetail);
            this.dailyClassService.actualizar(data.id, data).subscribe(data => {
              this.presentToast('Clase añadida correctamente');
            }, err => {
              this.presentToast('No fue posible insertar nueva clase');
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
