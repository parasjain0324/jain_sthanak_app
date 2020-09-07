import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuggestionPageRoutingModule } from './suggestion-routing.module';

import { SuggestionPage } from './suggestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SuggestionPageRoutingModule
  ],
  declarations: [SuggestionPage]
})
export class SuggestionPageModule {}
