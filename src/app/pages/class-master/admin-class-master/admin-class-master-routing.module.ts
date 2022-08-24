import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminClassMasterPage } from './admin-class-master.page';

const routes: Routes = [
  {
    path: '',
    component: AdminClassMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminClassMasterPageRoutingModule {}
