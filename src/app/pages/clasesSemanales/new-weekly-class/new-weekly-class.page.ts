import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { GenerateClass } from 'src/app/models/generateClass';
import { MondayData } from 'src/app/models/mondayData';
import { TrainingCenter } from 'src/app/models/trainingCenter';
import { WeeklyClassMaster } from 'src/app/models/WeeklyClassMaster';
import { TrainingCenterService } from 'src/app/services/training-center.service';
import { WeeklyClassesMasterServiceService } from 'src/app/services/weekly-classes-master-service.service';

@Component({
  selector: 'app-new-weekly-class',
  templateUrl: './new-weekly-class.page.html',
  styleUrls: ['./new-weekly-class.page.scss'],
})
export class NewWeeklyClassPage implements OnInit {

  constructor( private classService: WeeklyClassesMasterServiceService,
    private centerService: TrainingCenterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

  mondayData: MondayData[] = [];
  classes: WeeklyClassMaster[] = [];
  centers: TrainingCenter[] = [];
  page: number = 0;
  searchValue: string = '';
  isEmpty: boolean = true;
  selectedClass: string = '';
  selectedWeek: MondayData = null;
  selectedTime: number = 0;
  selectedCenter: string = '';


  ngOnInit() {
    this.selectedClass = '';
    this.selectedWeek = null;
    this.getMondays();
    this.cargar();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.cargarClasesMaestras();
    this.cargarCenters()
  }

  cargarClasesMaestras() {
    this.classService.listaMasterAll(1000).subscribe(
      data => {
        this.classes = data.content;
      }, err => {
        this.volver();
      }
    );
  }

  cargarCenters() {
    this.centerService.lista(100).subscribe(data => {
      this.centers = data.content;
    }, err => {
      console.log(err);
      this.presentToast('Error cargando centros de entrenamiento');
    });
  }

  selectTemplateId(event) {
    this.selectedClass = event.value.id;
   }

   selectCenterId(event) {
    this.selectedCenter = event.value.id;
   }

   selectWeek(event) {
     console.log(event);
    this.selectedWeek = event.value;
   }

  createNew() {
      if ( this.selectedClass == '' || this.selectedWeek == null) {
        this.presentToast('PLANTILLA Y SEMANA SON CAMPOS OBLIGATORIOS');
      }

      var generateClass =
        new GenerateClass(this.selectedWeek.name, this.selectedWeek.date.getTime(), this.selectedClass, this.selectedClass);

    this.classService.copyFrom(generateClass).subscribe(
      data => {
        this.presentToast('Nueva clase semanal generada correctamente.')
        this.cargar();
        this.volver();

      }, err => {
        this.presentToast('Error generando nueva clase semanal.')
        this.volver();
      }
    );
  }


  getWorkouts() {
   this.classes = [];
    this.page = 0;
    if (this.searchValue != '') {
      this.classService.listaByNameMaster(0, this.searchValue).subscribe(
        data => {
         this.classes = data.content;
          this.isEmpty = data.content === [];
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    } else {
      this.cargar();
    }
    this.page+=1;
    
  }

  volver() {
    this.router.navigate(['/weekly-classes']);
  }

  espMonthName(month: number) : string {
    switch (month) {
      case 0: return 'Enero'; break;
      case 1: return 'Febrero'; break;
      case 2: return 'Marzo'; break;
      case 3: return 'Abril'; break;
      case 4: return 'Mayo'; break;
      case 5: return 'Junio'; break;
      case 6: return 'Julio'; break;
      case 7: return 'Agosto'; break;
      case 8: return 'Septiembre'; break;
      case 9: return 'Octubre'; break;
      case 10: return 'Noviembre'; break;
      case 11: return 'Diciembre'; break;
      default: return '';
    }
  }

  getMondays() {
    this.mondayData = [];
    var day_info = 8.64e+7
    var d = new Date();
    var auxDate;
    var name;
    d.setDate(d.getDate() + ((7-d.getDay())%7+1) % 7);
    for (let i = 0; i < 12; i++) {
      auxDate = new Date(d.getTime() + day_info*7*i);
      name = 'Semana Lunes ' + auxDate.getDate() + ' de ' + this.espMonthName(auxDate.getMonth());//Day of month
      console.log(name);
      this.mondayData.push(new MondayData(name, auxDate));
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

}
