import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUserPaymentPageRoutingModule } from './list-user-payment-routing.module';

import { ListUserPaymentPage } from './list-user-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListUserPaymentPageRoutingModule
  ],
  declarations: [ListUserPaymentPage]
})
export class ListUserPaymentPageModule {}
