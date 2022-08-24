import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyClassesMasterPageRoutingModule } from './daily-classes-master-routing.module';

import { DailyClassesMasterPage } from './daily-classes-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyClassesMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DailyClassesMasterPage]
})
export class DailyClassesMasterPageModule {}
