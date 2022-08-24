import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Fare } from 'src/app/models/fare';
import { FareService } from 'src/app/services/fare.service';

@Component({
  selector: 'app-fares-list',
  templateUrl: './fares-list.page.html',
  styleUrls: ['./fares-list.page.scss'],
})
export class FaresListPage implements OnInit {

  private subs: Subscription = new Subscription();

  constructor( private service: FareService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

    fares: Fare[] = [];

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
        this.fares = data.content;
      })
    );
  }

  newTrainingClass() {
    this.subs.add(
      this.service
        .nuevo(new Fare(null, "Nueva Tarifa", 0.0))
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
