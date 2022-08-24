import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWeeklyClassesMasterPageRoutingModule } from './new-weekly-classes-master-routing.module';

import { NewWeeklyClassesMasterPage } from './new-weekly-classes-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWeeklyClassesMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewWeeklyClassesMasterPage]
})
export class NewWeeklyClassesMasterPageModule {}
