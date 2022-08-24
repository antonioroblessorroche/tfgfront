import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from 'src/app/models/workout';
import { TokenService } from 'src/app/services/token.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.page.html',
  styleUrls: ['./workout-detail.page.scss'],
})
export class WorkoutDetailPage implements OnInit {

  workout: Workout;

  constructor(
    private workoutService: WorkoutService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
   
    this.cargar();
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

  volver(): void {
    const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin' : '/user';
    this.router.navigate([redirectUrtl]);
  }

}
