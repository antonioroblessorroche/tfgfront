import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeeklyClassMaster } from 'src/app/models/WeeklyClassMaster';
import { WeeklyClassesMasterServiceService } from 'src/app/services/weekly-classes-master-service.service';

@Component({
  selector: 'app-weekly-classes-days',
  templateUrl: './weekly-classes-days.page.html',
  styleUrls: ['./weekly-classes-days.page.scss'],
})
export class WeeklyClassesDaysPage implements OnInit {

  trainingClass: WeeklyClassMaster;
  hi = "hola";

  constructor(private classService: WeeklyClassesMasterServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargar();
    console.log(this.trainingClass);
  }

  buttonClick() {
    console.log("Holi jeje");
    console.log(this.trainingClass);
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.classService.detalle(id).subscribe(
      data => {
        console.log(data);
       this.trainingClass = data;
      }, err => {
        this.volver();
      }
    )
  }

  volver() {
    this.router.navigate(['/']);
  }


}
