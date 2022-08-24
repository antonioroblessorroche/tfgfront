import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClassMaster } from 'src/app/models/classMaster';
import { ClassMasterService } from 'src/app/services/classMasterService';

@Component({
  selector: 'app-edit-class-master',
  templateUrl: './edit-class-master.page.html',
  styleUrls: ['./edit-class-master.page.scss'],
})
export class EditClassMasterPage implements OnInit {

  classMaster: ClassMaster = new ClassMaster('', '');

  msgOk = '';
  msgKo = '';

  constructor(    
    private classMasterService: ClassMasterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cargar();
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.classMasterService.actualizar(id, this.classMaster).subscribe(
      data => {
        this.presentToast(this.classMaster.name + ' actualizado');
        this.vaciar();
        this.volver();
      }, err => {
        this.presentToast(err.error.mensaje);
      }

    );
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.classMasterService.detalle(id).subscribe(
      data => {
        this.classMaster = data;
      }, err => {
        this.volver();
      }
    )
  }

  vaciar() {
    this.classMaster.name = '';
    this.classMaster.description = '';
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
