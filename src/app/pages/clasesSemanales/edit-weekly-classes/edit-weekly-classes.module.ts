import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWeeklyClassesPageRoutingModule } from './edit-weekly-classes-routing.module';

import { EditWeeklyClassesPage } from './edit-weekly-classes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWeeklyClassesPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [EditWeeklyClassesPage]
})
export class EditWeeklyClassesPageModule {}
