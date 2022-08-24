import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDailyClassPageRoutingModule } from './edit-daily-class-routing.module';

import { EditDailyClassPage } from './edit-daily-class.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDailyClassPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [EditDailyClassPage]
})
export class EditDailyClassPageModule {}
