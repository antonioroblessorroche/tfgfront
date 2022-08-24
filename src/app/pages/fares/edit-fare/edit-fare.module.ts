import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFarePageRoutingModule } from './edit-fare-routing.module';

import { EditFarePage } from './edit-fare.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFarePageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditFarePage]
})
export class EditFarePageModule {}
