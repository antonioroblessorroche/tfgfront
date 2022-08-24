import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyClassesDaysPage } from './weekly-classes-days.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyClassesDaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyClassesDaysPageRoutingModule {}
