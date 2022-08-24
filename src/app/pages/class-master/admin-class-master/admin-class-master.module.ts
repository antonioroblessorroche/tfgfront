import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminClassMasterPageRoutingModule } from './admin-class-master-routing.module';

import { AdminClassMasterPage } from './admin-class-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminClassMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminClassMasterPage]
})
export class AdminClassMasterPageModule {}
