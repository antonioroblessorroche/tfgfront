import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietAdminPageRoutingModule } from './diet-admin-routing.module';

import { DietAdminPage } from './diet-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietAdminPageRoutingModule
  ],
  declarations: [DietAdminPage]
})
export class DietAdminPageModule {}
