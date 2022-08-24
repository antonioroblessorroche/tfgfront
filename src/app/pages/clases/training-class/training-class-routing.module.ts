import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingClassPage } from './training-class.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingClassPageRoutingModule {}
