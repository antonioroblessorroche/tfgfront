import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewClassMasterPageRoutingModule } from './new-class-master-routing.module';

import { NewClassMasterPage } from './new-class-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewClassMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewClassMasterPage]
})
export class NewClassMasterPageModule {}
