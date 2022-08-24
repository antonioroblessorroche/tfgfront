import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassMasterDetailPage } from './detail-class-master.page';

const routes: Routes = [
  {
    path: '',
    component: ClassMasterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailClassMasterPageRoutingModule {}
