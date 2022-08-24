import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailUserPaymentPage } from './detail-user-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DetailUserPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailUserPaymentPageRoutingModule {}
