import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDailyClassMasterPageRoutingModule } from './new-daily-class-routing.module';

import { NewDailyClassMasterPage } from './new-daily-class.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDailyClassMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewDailyClassMasterPage]
})
export class NewDailyClassPageModule {}
