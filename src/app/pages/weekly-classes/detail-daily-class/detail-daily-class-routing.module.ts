import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDailyClassPage } from './detail-daily-class.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDailyClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDailyClassPageRoutingModule {}
