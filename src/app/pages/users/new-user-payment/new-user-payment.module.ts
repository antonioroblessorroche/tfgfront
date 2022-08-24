import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUserPaymentPageRoutingModule } from './new-user-payment-routing.module';

import { NewUserPaymentPage } from './new-user-payment.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUserPaymentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewUserPaymentPage]
})
export class NewUserPaymentPageModule {}
