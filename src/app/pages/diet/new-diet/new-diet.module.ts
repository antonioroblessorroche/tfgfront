import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDietPageRoutingModule } from './new-diet-routing.module';

import { NewDietPage } from './new-diet.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDietPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [NewDietPage]
})
export class NewDietPageModule {}
