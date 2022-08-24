import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietAdminPage } from './diet-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DietAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietAdminPageRoutingModule {}
