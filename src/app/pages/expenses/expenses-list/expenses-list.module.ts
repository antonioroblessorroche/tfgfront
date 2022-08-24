import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesListPageRoutingModule } from './expenses-list-routing.module';

import { ExpensesListPage } from './expenses-list.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensesListPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [ExpensesListPage]
})
export class ExpensesListPageModule {}
