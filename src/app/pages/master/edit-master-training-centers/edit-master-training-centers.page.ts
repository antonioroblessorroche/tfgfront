import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { TrainingCenterService } from 'src/app/services/training-center.service';

@Component({
  selector: 'app-edit-master-training-centers',
  templateUrl: './edit-master-training-centers.page.html',
  styleUrls: ['./edit-master-training-centers.page.scss'],
})
export class EditMasterTrainingCentersPage implements OnInit {

  constructor(private service: TrainingCenterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

    center: TrainingCenter;

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
    this.router.navigate(['/master-training-centers']);
  }

  editar() {
    this.service.actualizar(this.center.id, this.center).subscribe(data => {
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
      this.center = data;
      console.log(data);
    }, err => {
      this.presentToast('No se encontró el centro de entrenamientos');
      this.volver();
    })
  }

}
