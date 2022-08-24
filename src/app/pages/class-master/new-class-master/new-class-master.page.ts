import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClassMaster } from 'src/app/models/classMaster';
import { ClassMasterService } from 'src/app/services/classMasterService';

@Component({
  selector: 'app-new-class-master',
  templateUrl: './new-class-master.page.html',
  styleUrls: ['./new-class-master.page.scss'],
})
export class NewClassMasterPage implements OnInit {

  workout: ClassMaster;
  name= '';
  description= '';

  msgOk = '';
  msgKo = '';

  constructor(
    private workoutService: ClassMasterService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  onCreate() {
    this.workout = new ClassMaster(this.name, this.description);
    this.workoutService.nuevo(this.workout).subscribe(
      data => {
        this.presentToast(data.mensaje);
        this.vaciar();
        this.volver();
      }, err => {
        this.presentToast(err.error.mensaje);
      }

    );
  }

  vaciar() {
    this.name = '';
    this.description = '';
  }

  volver() {
    this.router.navigate(['/admin-class-master']);
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
