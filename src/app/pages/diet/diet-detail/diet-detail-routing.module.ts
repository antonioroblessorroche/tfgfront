import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietDetailPage } from './diet-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DietDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietDetailPageRoutingModule {}
