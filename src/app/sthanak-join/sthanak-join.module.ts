import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SthanakJoinPageRoutingModule } from './sthanak-join-routing.module';

import { SthanakJoinPage } from './sthanak-join.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SthanakJoinPageRoutingModule
  ],
  declarations: [SthanakJoinPage]
})
export class SthanakJoinPageModule {}
