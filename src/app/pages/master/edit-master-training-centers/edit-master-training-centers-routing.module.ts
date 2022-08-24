import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMasterTrainingCentersPage } from './edit-master-training-centers.page';

const routes: Routes = [
  {
    path: '',
    component: EditMasterTrainingCentersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMasterTrainingCentersPageRoutingModule {}
