import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyClassesDaysPageRoutingModule } from './weekly-classes-days-routing.module';

import { WeeklyClassesDaysPage } from './weekly-classes-days.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyClassesDaysPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeeklyClassesDaysPage]
})
export class WeeklyClassesDaysPageModule {}
