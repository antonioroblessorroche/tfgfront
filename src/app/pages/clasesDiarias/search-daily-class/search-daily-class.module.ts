import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDailyClassPageRoutingModule } from './search-daily-class-routing.module';

import { SearchDailyClassPage } from './search-daily-class.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDailyClassPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchDailyClassPage]
})
export class SearchDailyClassPageModule {}
