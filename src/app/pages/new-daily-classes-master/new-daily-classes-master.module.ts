import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { NewDailyClassesMasterPageRoutingModule } from './new-daily-classes-master-routing.module';

import { NewDailyClassesMasterPage } from './new-daily-classes-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDailyClassesMasterPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [NewDailyClassesMasterPage]
})
export class NewDailyClassesMasterPageModule {}
