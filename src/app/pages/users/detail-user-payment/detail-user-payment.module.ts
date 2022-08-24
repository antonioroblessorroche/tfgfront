import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailUserPaymentPageRoutingModule } from './detail-user-payment-routing.module';

import { DetailUserPaymentPage } from './detail-user-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailUserPaymentPageRoutingModule
  ],
  declarations: [DetailUserPaymentPage]
})
export class DetailUserPaymentPageModule {}
