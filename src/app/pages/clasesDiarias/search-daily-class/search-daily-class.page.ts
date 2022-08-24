import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DailyClasses } from 'src/app/models/dailyClasses';
import { DailyClassSession } from 'src/app/models/DailyClassSession';
import { DailyClassesService } from 'src/app/services/daily-classes.service';
import { NewDailyClassMasterPage } from '../../weekly-classes/new-daily-class-master/new-daily-class.page';

@Component({
  selector: 'app-search-daily-class',
  templateUrl: './search-daily-class.page.html',
  styleUrls: ['./search-daily-class.page.scss'],
})
export class SearchDailyClassPage implements OnInit {

  classes : DailyClasses;
  dailyClassId: string;
  // date: Date;
  selector = "clases";
  sessions: DailyClassSession[] = [];
  convertedSelectedDate: string = '';
  selectedRawDate: Date = new Date();

  constructor(
    private classService: DailyClassesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
    let date = new Date();
    this.convertedSelectedDate = 'hoy'
  }

  ionViewWillEnter() {
    this.selector = 'inscripciones'
    this.selector = 'clases';
    this.cargar(this.selectedRawDate);

  }

  segmentChanged($event) {
    this.selector = $event.detail.value;
    console.log($event.detail.value);
  }


  cargar(date: Date): void {
    // this.dailyClassId = this.activatedRoute.snapshot.params.id;

    this.classService.inscripcionesUsuario().subscribe(
      data => {
        console.log(data);
        this.sessions = data.dailyClasses;
        for (let i = 0; i < this.sessions.length; i++) {
          let date = new Date(this.sessions[i].classTimestamp);
          this.sessions[i].classConvertedTime = date.getDate() + '/'
            + (date.getMonth() + 1) + '/'
            + date.getFullYear();
            
        }
        console.log('a');
      }, err => {
        console.log(err);
      }
    );


    this.classService.listaByDate(0, date.getTime()).subscribe(
      data => {
        console.log(data);
         this.classes = data.content[0];
       for (let i = 0; i < data.content.length; i++) {
         this.classes
        for (let j=0; j < data.content[i].dailyClasses.length; j++) {
          data.content[i].dailyClasses[j].index = j;
         }
        }
      }, err => {
        this.volver();
      }
    )
  }

  deleteConfirm(indexOfElement: number): void {
    this.classes.dailyClasses.splice(indexOfElement, 1);
    this.classService.actualizar(this.classes.id, this.classes).subscribe(data => {
      this.presentToast('Clase eliminada correctamente');
    }, err => {
      this.presentToast('No fue posible eliminar clase');
    });
    setTimeout(() => {  this.cargar(new Date()); }, 500);
    // this.cargar();
  }

  volver() {
    this.router.navigate(['/']);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  changeDate(event) {
    let date = new Date(event.detail.value);
    this.selectedRawDate = date;
    this.convertedSelectedDate = 'el día ' + date.getDate() + '/'
            + (date.getMonth() + 1);
    console.log(date);
    this.cargar(date);
   }

  //  buscar() {
    //  this.cargar();
  //  }

}
