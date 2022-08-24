import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewExpensePageRoutingModule } from './new-expense-routing.module';

import { NewExpensePage } from './new-expense.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewExpensePageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewExpensePage]
})
export class NewExpensePageModule {}
