import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDailyClassesMasterPageRoutingModule } from './edit-daily-classes-master-routing.module';

import { EditDailyClassesMasterPage } from './edit-daily-classes-master.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDailyClassesMasterPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [EditDailyClassesMasterPage]
})
export class EditDailyClassesMasterPageModule {}
