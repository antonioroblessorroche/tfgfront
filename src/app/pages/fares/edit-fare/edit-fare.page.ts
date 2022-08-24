import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Fare } from 'src/app/models/fare';
import { FareService } from 'src/app/services/fare.service';

@Component({
  selector: 'app-edit-fare',
  templateUrl: './edit-fare.page.html',
  styleUrls: ['./edit-fare.page.scss'],
})
export class EditFarePage implements OnInit {

  constructor(private service: FareService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

    fare: Fare;

  ngOnInit() {
    this.cargar();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  onCreate() {
   this.editar();
  }

  volver() {
    this.router.navigate(['/fares-list']);
  }

  editar() {
    this.service.actualizar(this.fare.id, this.fare).subscribe(data => {
      console.log(data);
      this.presentToast('Centro de entrenamiento actualizado correctamente');
      this.volver();
    }, err => {
      this.presentToast('No puco actualizarse el centro de entrenamientos.');
    })
  }

  cargar() {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.detalle(id).subscribe(data => {
      this.fare = data;
      console.log(data);
    }, err => {
      this.presentToast('No se encontró el centro de entrenamientos');
      this.volver();
    })
  }


}
