import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserPaymentPage } from './list-user-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ListUserPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUserPaymentPageRoutingModule {}
