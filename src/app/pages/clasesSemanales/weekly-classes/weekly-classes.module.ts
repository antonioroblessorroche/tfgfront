import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyClassesPageRoutingModule } from './weekly-classes-routing.module';

import { WeeklyClassesPage } from './weekly-classes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    WeeklyClassesPageRoutingModule
  ],
  declarations: [WeeklyClassesPage]
})
export class WeeklyClassesPageModule {}
