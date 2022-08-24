import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyClassesMasterPage } from './daily-classes-master.page';

const routes: Routes = [
  {
    path: '',
    component: DailyClassesMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyClassesMasterPageRoutingModule {}
