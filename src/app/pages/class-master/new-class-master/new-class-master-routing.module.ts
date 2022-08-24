import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewClassMasterPage } from './new-class-master.page';

const routes: Routes = [
  {
    path: '',
    component: NewClassMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewClassMasterPageRoutingModule {}
