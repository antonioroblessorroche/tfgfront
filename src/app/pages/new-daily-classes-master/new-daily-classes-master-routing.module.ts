import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDailyClassesMasterPage } from './new-daily-classes-master.page';

const routes: Routes = [
  {
    path: '',
    component: NewDailyClassesMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDailyClassesMasterPageRoutingModule {}
