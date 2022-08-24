import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminClassesPage } from './admin-classes.page';

const routes: Routes = [
  {
    path: '',
    component: AdminClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminClassesPageRoutingModule {}
