import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularWeeklyClassesPage } from './regular-weekly-classes.page';

const routes: Routes = [
  {
    path: '',
    component: RegularWeeklyClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularWeeklyClassesPageRoutingModule {}
