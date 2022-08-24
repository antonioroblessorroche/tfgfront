import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DailyClasses } from 'src/app/models/dailyClasses';
import { DailyClassesMaster } from 'src/app/models/dailyClassMaster';
import { MasterDailyClasses } from 'src/app/models/masterDailyClass';
import { DailyClassesService } from 'src/app/services/daily-classes.service';

@Component({
  selector: 'app-daily-classes-master',
  templateUrl: './daily-classes-master.page.html',
  styleUrls: ['./daily-classes-master.page.scss'],
})
export class DailyClassesMasterPage implements OnInit {

  classes : DailyClassesMaster;
  dailyClassId: string;

  constructor(
    private classService: DailyClassesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
    // this.cargar();
  }

  ionViewWillEnter() {
    this.cargar();
  }


  cargar(): void {
    this.dailyClassId = this.activatedRoute.snapshot.params.id;
    this.classService.detalleMaster(this.dailyClassId).subscribe(
      data => {
         this.classes = data;
      //  if (this.classes.classesDetail!= null || this.classes.classesDetail != undefined) {
      //   for (let i=0; i < this.classes.classesDetail.length; i++) {
      //       this.classes.classesDetail[i].convertedTimeStart = new Date(this.classes.classesDetail[i].timeStart).toLocaleTimeString();
      //       this.classes.classesDetail[i].convertedTimeEnd = new Date(this.classes.classesDetail[i].timeEnd).toLocaleTimeString();
      //    }
      //   }
      }, err => {
        this.volver();
      }
    )
  }

  deleteConfirm(indexOfElement: number): void {
    this.classes.dailyClasses.splice(indexOfElement, 1);
    this.classService.actualizarMaster(this.classes.id, this.classes).subscribe(data => {
      this.presentToast('Clase eliminada correctamente');
    }, err => {
      this.presentToast('No fue posible eliminar clase');
    });
    this.cargar();
  }

  volver() {
    this.router.navigate(['/']);
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
