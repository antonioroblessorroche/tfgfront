import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWorkoutPageRoutingModule } from './new-workout-routing.module';

import { NewWorkoutPage } from './new-workout.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWorkoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewWorkoutPage]
})
export class NewWorkoutPageModule {}
