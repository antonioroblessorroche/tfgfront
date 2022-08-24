import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ClassMaster } from 'src/app/models/classMaster';
import { WeeklyClassMaster } from 'src/app/models/WeeklyClassMaster';
import { WeeklyClassesMasterServiceService } from 'src/app/services/weekly-classes-master-service.service';

@Component({
  selector: 'app-new-weekly-classes-master',
  templateUrl: './new-weekly-classes-master.page.html',
  styleUrls: ['./new-weekly-classes-master.page.scss'],
})
export class NewWeeklyClassesMasterPage implements OnInit {

  constructor(
    private classService: WeeklyClassesMasterServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  classMaster: WeeklyClassMaster;
  name: string;
  description: string;

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    const id = this.activatedRoute.snapshot.params.id;
    this.classService.detalleMaster(id).subscribe(
      data => {
       this.classMaster = data;
       this.name = data.name;
       this.description = data.description;
      }, err => {
        this.volver();
      }
    )

  }
  
  actualizar() {
    this.classMaster.name = this.name;
    this.classMaster.description = this.description;
    this.classService.actualizarMaster(this.classMaster.id, this.classMaster).subscribe(data => {
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
