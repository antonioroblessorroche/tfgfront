import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewUserPageRoutingModule } from './create-new-user-routing.module';

import { CreateNewUserPage } from './create-new-user.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewUserPageRoutingModule,
    ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [CreateNewUserPage]
})
export class CreateNewUserPageModule {}
