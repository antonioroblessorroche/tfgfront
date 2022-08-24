import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DailyClasses } from 'src/app/models/dailyClasses';
import { DailyClassSession } from 'src/app/models/DailyClassSession';
import { DailyClassesService } from 'src/app/services/daily-classes.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-detail-daily-class',
  templateUrl: './detail-daily-class.page.html',
  styleUrls: ['./detail-daily-class.page.scss'],
})
export class DetailDailyClassPage implements OnInit {

  class : DailyClassSession;
  dailyClassId: string;
  isAvailable: boolean = true;
  userHasJoined: boolean = false;
  pastClass: boolean = false;
  hours: string[] = [];

  constructor(
    private classService: DailyClassesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    const id = this.activatedRoute.snapshot.params.id;
    const index = this.activatedRoute.snapshot.params.index;
    this.classService.detalle(id).subscribe(
      data => {
        console.log(data);
         this.class = data.dailyClasses[index];
         this.isAvailable = this.class.slots > this.class.reservations;
         this.userHasJoined = this.class.userHasJoined;
         this.hours = this.class.time.split(':');
         this.pastClass = new Date().getTime() > new Date(
           data.year, data.month -1, data.day, parseInt(this.hours[0]), parseInt(this.hours[1], 0)
         ).getTime();
      //  for (let i = 0; i < data.content.length; i++) {
      //    this.classes
      //   for (let j=0; j < data.content[i].dailyClasses.length; j++) {
      //     data.content[i].dailyClasses[j].index = j;
      //    }
        // }
      }, err => {
        this.volver();
      }
    )
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  inscribirme() {
    const id = this.activatedRoute.snapshot.params.id;
    const userName = this.tokenService.getUsername();
    this.classService.inscripcion(id, userName, this.class.id).subscribe(
      data => {
        this.presentToast('Se ha realizado su inscripción en la clase.');
        this.volver();
      }, err => {
        this.presentToast('No ha podido realizarse su inscripción en la clase. ' + err.error.mensaje);
      }
    );
  }

  borrarme() {
    const id = this.activatedRoute.snapshot.params.id;
    const userName = this.tokenService.getUsername();
    this.classService.eliminacion(id, userName, this.class.id).subscribe(
      data => {
        this.presentToast('Se ha eliminado su inscripción en la clase.');
        this.volver();
      }, err => {
        this.presentToast('No ha podido eliminarse su inscripción en la clase. ' + err.error.mensaje);
      }
    );
  }

  volver() {
    this.router.navigate(['/search-daily-class']);
  }

}
