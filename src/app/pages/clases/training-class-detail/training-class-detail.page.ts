import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TrainingClass } from 'src/app/models/trainingClass';
import { TrainingClassReservation } from 'src/app/models/trainingClassReservation';
import { TokenService } from 'src/app/services/token.service';
import { TrainingClassService } from 'src/app/services/trainingclass.service';

@Component({
  selector: 'app-training-class-detail',
  templateUrl: './training-class-detail.page.html',
  styleUrls: ['./training-class-detail.page.scss'],
})
export class TrainingClassDetailPage implements OnInit {

  trainingClass: TrainingClass;

  constructor(
    private trainingClassService: TrainingClassService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
   
    this.cargar();
  }

  reservar() : void {
    const classId = this.activatedRoute.snapshot.params.id;
    const userName = this.tokenService.getUsername();
    this.trainingClassService.reservar(new TrainingClassReservation(userName, classId, 0 ,"")).subscribe(
        data => {
            this.presentToast('Clase reservada!');
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.trainingClassService.detalle(id).subscribe(
      data => {
        console.log(id);
        console.log(data);
        this.trainingClass = data;
        this.trainingClass.date = new Date(this.trainingClass.timeStart).toLocaleTimeString();
      }, err => {
        this.volver();
      }
    )
  }

  volver(): void {
    const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/classes' : '/classes';
    this.router.navigate([redirectUrtl]);
  }

  eliminarReserva(): void {
    const classId = this.activatedRoute.snapshot.params.id;
    const userName = this.tokenService.getUsername();
    this.trainingClassService.deleteReservation(this.trainingClass.reservationId).subscribe(
        data => {
            this.presentToast('Reserva eliminada!');
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
  }

}
