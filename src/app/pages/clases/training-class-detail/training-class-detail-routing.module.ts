import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingClassDetailPage } from './training-class-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingClassDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingClassDetailPageRoutingModule {}
