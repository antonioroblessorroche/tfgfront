import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterTrainingCentersPageRoutingModule } from './master-training-centers-routing.module';

import { MasterTrainingCentersPage } from './master-training-centers.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterTrainingCentersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MasterTrainingCentersPage]
})
export class MasterTrainingCentersPageModule {}
