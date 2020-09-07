import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SthanakDetailPageRoutingModule } from './sthanak-detail-routing.module';

import { SthanakDetailPage } from './sthanak-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SthanakDetailPageRoutingModule
  ],
  declarations: [SthanakDetailPage]
})
export class SthanakDetailPageModule {}
