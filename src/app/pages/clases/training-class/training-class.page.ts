import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingClass } from 'src/app/models/trainingClass';
import { TrainingClassContent } from 'src/app/models/trainingClassContent';
import { TokenService } from 'src/app/services/token.service';
import { TrainingClassService } from 'src/app/services/trainingclass.service';

@Component({
  selector: 'app-training-class',
  templateUrl: './training-class.page.html',
  styleUrls: ['./training-class.page.scss'],
})
export class TrainingClassPage implements OnInit {

  session: TrainingClass[];
  day: number;
  month: number;
  year: number;
  date: Date;
  page = 0;
  searchValue = '';
  isEmpty: boolean;

  constructor(
    private sessionService: TrainingClassService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.cargar();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    var todayMidnight = new Date(this.year, this.month - 1, this.day).getTime();
    this.sessionService.listaByStartEndDate(0, todayMidnight, (todayMidnight + 86400000)).subscribe(
      data => {
        this.session = data.content;
        for (var i=0; i < this.session.length; i++) {
          this.session[i].date = new Date(this.session[i].timeStart).toLocaleTimeString();
        }
          this.isEmpty = data.content.length == 0;
      }, err => {
        this.volver();
      }
    )
  }


  getWorkouts() {
    this.session = [];
    this.page = 0;
    var pickDate = new Date(this.year, this.month -1, this.day).getTime();
    if (this.searchValue != '') {
      this.sessionService.listaByStartEndDateAndName(0, pickDate, (pickDate + 86400000), this.searchValue).subscribe(
        data => {
          this.session = data.content;
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

  clases() {
    const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/mis-clases' : '/mis-clases';
    this.router.navigate([redirectUrtl]);
  }

  setSearchValue(searchVal: string) {
    this.searchValue = searchVal;
    this.getWorkouts();
  }

  volver(): void {
    const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin-session' : '/admin-session';
    this.router.navigate([redirectUrtl]);
  }

  setDate(event) {
    var date = new Date(event.detail.value)
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.cargar();
  }

}
