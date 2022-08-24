import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';
import { SessionService } from 'src/app/services/session.service';
import { TokenService } from 'src/app/services/token.service';
import { TrainingSession } from 'src/app/models/trainingSession';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  workouts: Workout[] = [];
  userName = '';
  day = 0;
  year = 0;
  month = 0;
  page = 0;
  trainingSessions : TrainingSession[];

  constructor(
    private workoutService: WorkoutService,
     private sessionService: SessionService,
     private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.setTodayDate();
    this.userName = this.tokenService.getUsername()
    this.cargar();
  }

  setTodayDate(): void {
    var today = new Date();
    this.day = today.getDate();
    this.month = today.getMonth() + 1 
    this.year = today.getFullYear()
  }

  cargar(): void {
    // this.sessionService.listaByUserAndDate(this.page, this.userName, this.year, this.month, this.day).subscribe(
      this.sessionService.listaByUser(this.page, this.userName).subscribe(

      data => {
        this.trainingSessions = data.content;
      },
      err => {
        console.log("petó");
        console.log(err);
      }
    );
  }
}
