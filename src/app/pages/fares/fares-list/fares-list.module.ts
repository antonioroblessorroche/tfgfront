import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaresListPageRoutingModule } from './fares-list-routing.module';

import { FaresListPage } from './fares-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaresListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FaresListPage]
})
export class FaresListPageModule {}
