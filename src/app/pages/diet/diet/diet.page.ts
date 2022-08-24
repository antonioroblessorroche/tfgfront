import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, IonInfiniteScroll } from '@ionic/angular';
import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.page.html',
  styleUrls: ['./diet.page.scss'],
})
export class DietPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  diets: Diet[] = [];
  user : string = "";
  page: 0;

  constructor(
    private dietService: DietService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargar();
    console.log(this.diets);
  }

  ionViewWillEnter() {
    this.cargar();
    console.log(this.diets);
  }

  cargar(): void {

    if (this.tokenService.getAuthorities().length > 1) {
      this.dietService.lista(0).subscribe(
        data => {
          this.diets = data.content;
          console.log(this.diets);
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    }
     else {
      this.user = this.tokenService.getUsername();
      this.dietService.findByUser(this.user).subscribe(
        data => {
          this.diets = data.content;
          console.log(this.diets);
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    }

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
    this.dietService.delete(id).subscribe(
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
