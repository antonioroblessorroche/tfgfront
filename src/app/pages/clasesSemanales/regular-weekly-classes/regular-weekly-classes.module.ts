import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularWeeklyClassesPageRoutingModule } from './regular-weekly-classes-routing.module';

import { RegularWeeklyClassesPage } from './regular-weekly-classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegularWeeklyClassesPageRoutingModule
  ],
  declarations: [RegularWeeklyClassesPage]
})
export class RegularWeeklyClassesPageModule {}
