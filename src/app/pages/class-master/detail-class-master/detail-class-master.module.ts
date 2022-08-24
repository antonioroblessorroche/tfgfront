import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailClassMasterPageRoutingModule } from './detail-class-master-routing.module';

import { ClassMasterDetailPage } from './detail-class-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailClassMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClassMasterDetailPage]
})
export class DetailClassMasterPageModule {}
