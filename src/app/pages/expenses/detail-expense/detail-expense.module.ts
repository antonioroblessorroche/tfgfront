import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailExpensePageRoutingModule } from './detail-expense-routing.module';

import { DetailExpensePage } from './detail-expense.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailExpensePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetailExpensePage]
})
export class DetailExpensePageModule {}
