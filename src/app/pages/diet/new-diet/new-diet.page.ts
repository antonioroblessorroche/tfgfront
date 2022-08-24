import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { UserService } from 'src/app/services/user.service';
import { ReducedUser } from 'src/app/models/reducedUser';

@Component({
  selector: 'app-new-diet',
  templateUrl: './new-diet.page.html',
  styleUrls: ['./new-diet.page.scss'],
})
export class NewDietPage implements OnInit {

  diet: Diet;
  userId = '';
  description = '';
  comments = '';
  year = 0;
  month = 0;
  day = 0;
  users: ReducedUser[] = [];

  msgOk = '';
  msgKo = '';

  constructor(
    private dietService: DietService,
    private router: Router,
    private toastController: ToastController,
    private userService: UserService
  ) { }

  ngOnInit() {

   this.setTodayDate();
   this.userService.lista().subscribe(
     data => {
       this.users= data;
     }, err => {
      this.presentToast("Error recuperndo usuarios: ");
     }
   );

  }

  setTodayDate(): void {
    var today = new Date();
    this.day = today.getDate();
    this.month = today.getMonth() + 1 
    this.year = today.getFullYear()
  }

  onCreate() {
    this.diet = new Diet(this.description, this.comments, this.userId, this.year, this.month, this.day);
    this.dietService.nuevo(this.diet).subscribe(
      data => {
        this.presentToast('Creada dieta');
        this.vaciar();
        this.volver();
      }, err => {
        this.presentToast(err.error.mensaje);
      }

    );
  }

  userChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.userId = event.value.id;
  }

  vaciar() {
    this.description = '';
    this.comments = '';
    this.userId = '';
    this.setTodayDate();
  }

  volver() {
    this.router.navigate(['/admin-diet']);
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
