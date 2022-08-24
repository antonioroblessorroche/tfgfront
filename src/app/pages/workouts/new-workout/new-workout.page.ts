import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.page.html',
  styleUrls: ['./new-workout.page.scss'],
})
export class NewWorkoutPage implements OnInit {

  workout: Workout;
  name= '';
  description= '';
  workoutGroup= '';

  msgOk = '';
  msgKo = '';

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  onCreate() {
    this.workout = new Workout(this.name, this.description, this.workoutGroup);
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
    this.workoutGroup = '';
  }

  volver() {
    this.router.navigate(['/admin']);
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
