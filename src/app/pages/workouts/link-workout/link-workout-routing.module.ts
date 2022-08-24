import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkWorkoutPage } from './link-workout.page';

const routes: Routes = [
  {
    path: '',
    component: LinkWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkWorkoutPageRoutingModule {}
