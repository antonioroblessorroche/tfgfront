import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterTrainingCentersPage } from './master-training-centers.page';

const routes: Routes = [
  {
    path: '',
    component: MasterTrainingCentersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterTrainingCentersPageRoutingModule {}
