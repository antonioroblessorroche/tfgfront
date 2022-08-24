import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TrainingClass } from 'src/app/models/trainingClass';
import { TrainingClassService } from 'src/app/services/trainingclass.service';

@Component({
  selector: 'app-new-daily-class',
  templateUrl: './new-daily-class.page.html',
  styleUrls: ['./new-daily-class.page.scss'],
})
export class NewDailyClassMasterPage implements OnInit {

  workout: TrainingClass;
  name= '';
  description= '';

  dailyClassId: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }


  ngOnInit() {
    this.dailyClassId = this.activatedRoute.snapshot.params.id;
    console.log(this.dailyClassId);

  }


  onCreate() {
    
  }

}
