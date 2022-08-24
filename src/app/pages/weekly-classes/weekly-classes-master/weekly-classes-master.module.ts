import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyClassesMasterPageRoutingModule } from './weekly-classes-master-routing.module';

import { WeeklyClassesMasterPage } from './weekly-classes-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyClassesMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeeklyClassesMasterPage]
})
export class WeeklyClassesMasterPageModule {}
