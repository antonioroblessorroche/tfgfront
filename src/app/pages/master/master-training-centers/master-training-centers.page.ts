import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { TrainingCenterService } from 'src/app/services/training-center.service';

@Component({
  selector: 'app-master-training-centers',
  templateUrl: './master-training-centers.page.html',
  styleUrls: ['./master-training-centers.page.scss'],
})
export class MasterTrainingCentersPage implements OnInit {

  private subs: Subscription = new Subscription();

  constructor( private service: TrainingCenterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

    centers: TrainingCenter[] = [];

  ngOnInit() {
    // this.cargar();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  ionViewWillEnter(){
    this.cargar();
 }

  cargar() {
    this.subs.add(
      this.service.lista(100).subscribe(data => {
        this.centers = data.content;
      })
    );
  }

  newTrainingClass() {
    this.subs.add(
      this.service
        .nuevo(new TrainingCenter(null, "Nuevo centro de entrenamiento", "Nuevo centro de entrenamiento autogenerado"))
        .subscribe(data => {
          console.log(data);
          this.cargar();
        }, err => {
          console.log('Error: ' + err);
        })
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
    this.subs.add(
      this.service.delete(id).subscribe(
        data => {
          this.presentToast('Centro de entrenamiento borrado correctamente');
          this.cargar();
        },
        err => {
          this.presentToast('Error borrando item');
        }
      )
    );
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
