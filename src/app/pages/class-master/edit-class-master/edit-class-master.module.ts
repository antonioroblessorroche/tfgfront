import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClassMasterPageRoutingModule } from './edit-class-master-routing.module';

import { EditClassMasterPage } from './edit-class-master.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClassMasterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditClassMasterPage]
})
export class EditClassMasterPageModule {}
