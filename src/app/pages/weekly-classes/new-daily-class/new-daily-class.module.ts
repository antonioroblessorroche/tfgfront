import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDailyClassPageRoutingModule } from './new-daily-class-routing.module';

import { NewDailyClassPage } from './new-daily-class.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDailyClassPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [NewDailyClassPage]
})
export class NewDailyClassPageModule {}
