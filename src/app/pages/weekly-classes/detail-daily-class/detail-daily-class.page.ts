import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DailyClasses } from 'src/app/models/dailyClasses';
import { DailyClassesService } from 'src/app/services/daily-classes.service';

@Component({
  selector: 'app-detail-daily-class',
  templateUrl: './detail-daily-class.page.html',
  styleUrls: ['./detail-daily-class.page.scss'],
})
export class DetailDailyClassPage implements OnInit {

  classes : DailyClasses;
  dailyClassId: string;

  constructor(
    private classService: DailyClassesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.cargar();
  }


  cargar(): void {
    this.dailyClassId = this.activatedRoute.snapshot.params.id;
    this.classService.detalle(this.dailyClassId).subscribe(
      data => {
        console.log(data);
         this.classes = data;
       if (this.classes.dailyClasses!= null || this.classes.dailyClasses != undefined) {
        for (let i=0; i < this.classes.dailyClasses.length; i++) {
          this.classes.dailyClasses[i].index = i;
         }
        }
      }, err => {
        this.volver();
      }
    )
  }

  deleteConfirm(indexOfElement: number): void {
    this.classes.dailyClasses.splice(indexOfElement, 1);
    this.classService.actualizar(this.classes.id, this.classes).subscribe(data => {
      this.presentToast('Clase eliminada correctamente');
    }, err => {
      this.presentToast('No fue posible eliminar clase');
    });
    setTimeout(() => {  this.cargar(); }, 500);
    // this.cargar();
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
