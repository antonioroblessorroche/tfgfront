import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDailyClassMasterPage } from './new-daily-class.page';


const routes: Routes = [
  {
    path: '',
    component: NewDailyClassMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDailyClassMasterPageRoutingModule {}
