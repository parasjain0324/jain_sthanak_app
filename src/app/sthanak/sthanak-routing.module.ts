import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SthanakPage } from './sthanak.page';

const routes: Routes = [
  {
    path: '',
    component: SthanakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SthanakPageRoutingModule {}
