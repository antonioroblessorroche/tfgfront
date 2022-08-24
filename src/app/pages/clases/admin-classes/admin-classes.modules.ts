import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminClassesPageRoutingModule } from './admin-classes-routing.modules';

import { AdminClassesPage } from './admin-classes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminClassesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminClassesPage]
})
export class AdminClassesPageModule {}
