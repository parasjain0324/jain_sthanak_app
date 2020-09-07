import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SthanakDetailPage } from './sthanak-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SthanakDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SthanakDetailPageRoutingModule {}
