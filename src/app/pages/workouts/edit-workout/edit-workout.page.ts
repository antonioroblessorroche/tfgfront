import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.page.html',
  styleUrls: ['./edit-workout.page.scss'],
})
export class EditWorkoutPage implements OnInit {

  workout: Workout = new Workout('', '', '');

  msgOk = '';
  msgKo = '';

  constructor(    
    private workoutService: WorkoutService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cargar();
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.workoutService.actualizar(id, this.workout).subscribe(
      data => {
        this.presentToast(data.mensaje);
        this.vaciar();
        this.volver();
      }, err => {
        this.presentToast(err.error.mensaje);
      }

    );
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.workoutService.detalle(id).subscribe(
      data => {
        this.workout = data;
      }, err => {
        this.volver();
      }
    )
  }

  vaciar() {
    this.workout.name = '';
    this.workout.description = '';
    this.workout.workoutGroup = '';
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
