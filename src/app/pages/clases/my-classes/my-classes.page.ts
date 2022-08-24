import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';
import { SessionService } from 'src/app/services/session.service';
import { TokenService } from 'src/app/services/token.service';
import { TrainingSession } from 'src/app/models/trainingSession';
import { TrainingClassReservation } from 'src/app/models/trainingClassReservation';
import { TrainingClassService } from 'src/app/services/trainingclass.service';

@Component({
  selector: 'app-class',
  templateUrl: './my-classes.page.html',
  styleUrls: ['./my-classes.page.scss'],
})
export class ClassPage implements OnInit {

//   workouts: Workout[] = [];
  page = 0;
  trainingSessions : TrainingClassReservation[];
  user : string;
  endDate : number;
  historic: boolean;

  constructor(
     private classService: TrainingClassService,
     private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.user = this.tokenService.getUsername();
    this.endDate = new Date().getTime();
    this.historic = false;
    this.cargar();
  }


  cargar(): void {
      this.classService.listaByUserAndDate(this.page, this.user, this.endDate).subscribe(

      data => {
        this.trainingSessions = data.content;
        for (let i = 0; i < this.trainingSessions.length; i++) {
            // this.trainingSessions[i].date = new Date(this.trainingSessions[i].classTime).toLocaleTimeString();
        }
      },
      err => {
        console.log("petó");
        console.log(err);
      }
    );
  }

  check(isChecked: boolean): void {
        this.endDate = isChecked ? 0 : new Date().getTime();
        this.cargar();
  }


}


