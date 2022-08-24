import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaresListPage } from './fares-list.page';

const routes: Routes = [
  {
    path: '',
    component: FaresListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaresListPageRoutingModule {}
