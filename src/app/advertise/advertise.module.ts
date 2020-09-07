import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisePageRoutingModule } from './advertise-routing.module';

import { AdvertisePage } from './advertise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertisePageRoutingModule
  ],
  declarations: [AdvertisePage]
})
export class AdvertisePageModule {}
