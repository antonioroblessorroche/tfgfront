import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyClassesMasterPage } from './weekly-classes-master.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyClassesMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyClassesMasterPageRoutingModule {}
