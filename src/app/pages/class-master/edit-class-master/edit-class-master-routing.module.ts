import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClassMasterPage } from './edit-class-master.page';

const routes: Routes = [
  {
    path: '',
    component: EditClassMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClassMasterPageRoutingModule {}
