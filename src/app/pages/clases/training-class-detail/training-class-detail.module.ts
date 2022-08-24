import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingClassDetailPageRoutingModule } from './training-class-detail-routing.module';

import { TrainingClassDetailPage } from './training-class-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingClassDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TrainingClassDetailPage]
})
export class TrainingClassDetailPageModule {}
