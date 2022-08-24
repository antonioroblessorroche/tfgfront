import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ClassMaster } from 'src/app/models/classMaster';
import { DailyClassesMaster } from 'src/app/models/dailyClassMaster';
import { MasterDailyClassSession } from 'src/app/models/masterDailyClassSession';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { ClassMasterService } from 'src/app/services/classMasterService';
import { DailyClassesService } from 'src/app/services/daily-classes.service';
import { TrainingCenterService } from 'src/app/services/training-center.service';

@Component({
  selector: 'app-new-daily-classes-master',
  templateUrl: './new-daily-classes-master.page.html',
  styleUrls: ['./new-daily-classes-master.page.scss'],
})
export class NewDailyClassesMasterPage implements OnInit {

  // workouts: Workout[] = [];
  workouts: ClassMaster[] = [];
  centers: TrainingCenter[] = [];
  name= '';
  page: number;
  searchValue: string;
  description= '';
  slots: number;
  place="";

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

  compareClasses() {
    
  }

  cargar(): void {

    this.workoutService.listaCompleta().subscribe(
      data => {
        console.log(data);
        this.workouts = data.content;
      },
      err => {
        console.log("petó");
        console.log(err);
      }
    );
    this.trainingCenterService.lista(100).subscribe(
      data => {
        this.centers = data.content;
      },
      err => {
        console.log("petó");
        console.log(err);
      }
    )
  }

  onCreate() {
    this.dailyClassService.detalleMaster(this.dailyClassId).subscribe(
      data => {
          if (data.dailyClasses == null) {
            data.dailyClasses = [];
          }
            var sessionDetail = new MasterDailyClassSession(this.selectedWorkout, this.description, this.selectedTime, this.slots, this.selectedPlace, null);
            data.dailyClasses.push(sessionDetail);
            this.dailyClassService.actualizarMaster(data.id, data).subscribe(data => {
              this.presentToast('Clase guardada correctamente');
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
