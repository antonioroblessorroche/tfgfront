import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWeeklyClassPage } from './new-weekly-class.page';

const routes: Routes = [
  {
    path: '',
    component: NewWeeklyClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewWeeklyClassPageRoutingModule {}
