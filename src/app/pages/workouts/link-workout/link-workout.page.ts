import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';

import { IonicSelectableComponent } from 'ionic-selectable';
import { ReducedUser } from 'src/app/models/reducedUser';
import { TrainingSession } from 'src/app/models/trainingSession';
import { Workout } from 'src/app/models/workout';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-link-workout',
  templateUrl: './link-workout.page.html',
  styleUrls: ['./link-workout.page.scss'],
})
export class LinkWorkoutPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private toastController: ToastController,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  workout: Workout;
  workouts: Workout[] = [];
  userId = '';
  description = '';
  year = 0;
  month = 0;
  day = 0;
  users: ReducedUser[] = [];
  page = 0;
  searchValue = '';
  date: string;
  formattedDate : Date;
  comments = '';
  selectedWorkouts : Workout[] = []
  selectedWorkoutIds : string[] = []
  trainingSession: TrainingSession;

  onCreate() {

    // this.diet = new Diet(this.description, this.comments, this.userId, this.year, this.month, this.day);
    // this.dietService.nuevo(this.diet).subscribe(
    //   data => {
    //     this.presentToast('Creada dieta');
    //     this.vaciar();
    //     this.volver();
    //   }, err => {
    //     this.presentToast(err.error.mensaje);
    //   }

    // );
    this.selectedWorkoutIds = [];
    this.formattedDate = new Date(Date.parse(this.date));
    this.day = this.formattedDate.getDate();
    this.month = this.formattedDate.getMonth() + 1 
    this.year = this.formattedDate.getFullYear()
    var size = this.selectedWorkouts.length;
    for (let i = 0; i < size; i++) {
      this.selectedWorkoutIds.push(this.selectedWorkouts[i].id);
    }
    this.trainingSession = new TrainingSession(this.userId, this.comments, [], this.selectedWorkoutIds, this.year, this.month, this.day);
   this.sessionService.nuevo(this.trainingSession).subscribe(
      data => {
        this.presentToast('Creada sesión de entrenamiento');
        // this.vaciar();
        this.volver();
      }, err => {
        this.presentToast(err.error.mensaje);
      }
         );
  }


  ngOnInit() {
    this.setTodayDate();
   this.userService.lista().subscribe(
     data => {
       this.users= data;
     }, err => {
      this.presentToast("Error recuperndo usuarios: ");
     }
   );

   this.workoutService.lista(this.page).subscribe(
    data => {
      this.workouts = data.content;
    },
    err => {
      console.log("petó");
      console.log(err);
    }
  );
  }

  setDate(event) {
    this.day = event.getDate();
    this.month = event.getMonth() + 1 
    this.year = event.getFullYear()
  }

  getWorkouts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    this.workouts = [];
    this.page = 0;
    if (event.text != '') {
      this.workoutService.listaByName(this.page, event.text).subscribe(
        data => {
          this.workouts = data.content;
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    } else {
      this.workoutService.lista(this.page).subscribe(
        data => {
          this.workouts = data.content;
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    }
        this.page+=1;
    
  }


  getMore(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    if (event.text != '') {
      this.workoutService.listaByName(this.page, event.text).subscribe(
        data => {
          let dataSize = data.content.length;
        if (dataSize > 0) {
          for (let i = 0; i< dataSize; i++) {
            this.workouts.push(data.content[i]);
          }
         this.page+=1;
        }  else {
          // event.target.disabled = true;
          event.component.disableInfiniteScroll();
        }   
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    } else {
      this.workoutService.lista(this.page).subscribe(
        data => {
          let dataSize = data.content.length;
          if (dataSize > 0) {
            for (let i = 0; i< dataSize; i++) {
              this.workouts.push(data.content[i]);
            }
           this.page+=1;
          }  else {
            // event.target.disabled = true;
            event.component.disableInfiniteScroll();
          }   
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
    }

    // setTimeout(() => {
    //   event.component.disableInfiniteScroll();
    // }, 500);
  }

  setSearchValue(searchVal: string) {
    this.searchValue = searchVal;
  }

  setTodayDate(): void {
    var today = new Date();
    this.day = today.getDate();
    this.month = today.getMonth() + 1 
    this.year = today.getFullYear()
  }

  userChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.userId = event.value.nombreUsuario;
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  volver() {
    this.router.navigate(['/admin']);
  }

}
