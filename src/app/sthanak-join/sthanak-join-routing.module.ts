import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SthanakJoinPage } from './sthanak-join.page';

const routes: Routes = [
  {
    path: '',
    component: SthanakJoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SthanakJoinPageRoutingModule {}
