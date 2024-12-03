import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceAddPage } from './space-add.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceAddPageRoutingModule {}
