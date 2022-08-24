import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewWeeklyClassPageRoutingModule } from './new-weekly-class-routing.module';
import { NewWeeklyClassPage } from './new-weekly-class.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWeeklyClassPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [NewWeeklyClassPage]
})
export class NewWeeklyClassPageModule {}
