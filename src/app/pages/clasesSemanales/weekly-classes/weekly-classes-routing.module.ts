import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyClassesPage } from './weekly-classes.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyClassesPageRoutingModule {}
