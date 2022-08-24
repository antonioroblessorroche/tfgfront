import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFarePage } from './edit-fare.page';

const routes: Routes = [
  {
    path: '',
    component: EditFarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFarePageRoutingModule {}
