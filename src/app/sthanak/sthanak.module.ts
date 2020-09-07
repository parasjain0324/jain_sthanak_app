import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SthanakPageRoutingModule } from './sthanak-routing.module';

import { SthanakPage } from './sthanak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SthanakPageRoutingModule
  ],
  declarations: [SthanakPage]
})
export class SthanakPageModule {}
