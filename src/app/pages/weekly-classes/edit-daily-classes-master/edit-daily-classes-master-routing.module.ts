import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDailyClassesMasterPage } from './edit-daily-classes-master.page';

const routes: Routes = [
  {
    path: '',
    component: EditDailyClassesMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDailyClassesMasterPageRoutingModule {}
