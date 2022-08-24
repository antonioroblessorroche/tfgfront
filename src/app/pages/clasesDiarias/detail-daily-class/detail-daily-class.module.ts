import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDailyClassPageRoutingModule } from './detail-daily-class-routing.module';

import { DetailDailyClassPage } from './detail-daily-class.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDailyClassPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailDailyClassPage]
})
export class DetailDailyClassPageModule {}
