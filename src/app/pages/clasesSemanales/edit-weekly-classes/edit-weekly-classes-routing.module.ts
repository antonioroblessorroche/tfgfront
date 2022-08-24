import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWeeklyClassesPage } from './edit-weekly-classes.page';

const routes: Routes = [
  {
    path: '',
    component: EditWeeklyClassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWeeklyClassesPageRoutingModule {}
