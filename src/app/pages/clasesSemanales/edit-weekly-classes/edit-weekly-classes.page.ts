import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { WeeklyClass } from 'src/app/models/WeeklyClass';
import { WeeklyClassesMasterServiceService } from 'src/app/services/weekly-classes-master-service.service';

@Component({
  selector: 'app-edit-weekly-classes',
  templateUrl: './edit-weekly-classes.page.html',
  styleUrls: ['./edit-weekly-classes.page.scss'],
})
export class EditWeeklyClassesPage implements OnInit {


  constructor(
    private classService: WeeklyClassesMasterServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  class: WeeklyClass;
  name: string;
  description: string;

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    const id = this.activatedRoute.snapshot.params.id;
    this.classService.detalle(id).subscribe(
      data => {
       this.class = data;
       this.name = data.name;
       this.description = data.description;
      }, err => {
        this.volver();
      }
    )

  }
  
  actualizar() {
    this.class.name = this.name;
    this.class.description = this.description;
    this.classService.actualizarMaster(this.class.id, this.class).subscribe(data => {
      this.presentToast("Clase maestra actualizada correctamente");
    }, err => {
      this.presentToast("No fue posible actualizar la clase maestra");
    })

      this.volver();
  }

  volver() {
    this.router.navigate(['/weekly-classes-master']);
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
