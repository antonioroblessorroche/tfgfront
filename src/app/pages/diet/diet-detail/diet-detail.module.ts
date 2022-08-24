import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietDetailPageRoutingModule } from './diet-detail-routing.module';

import { DietDetailPage } from './diet-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DietDetailPage]
})
export class DietDetailPageModule {}
