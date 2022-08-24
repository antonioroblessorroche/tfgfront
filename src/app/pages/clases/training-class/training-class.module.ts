import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingClassPageRoutingModule } from './training-class-routing.module';

import { TrainingClassPage } from './training-class.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingClassPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TrainingClassPage]
})
export class TrainingClassPageModule {}
