import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDailyClassPage } from './edit-daily-class.page';

const routes: Routes = [
  {
    path: '',
    component: EditDailyClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDailyClassPageRoutingModule {}
