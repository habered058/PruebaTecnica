import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacesDetailPage } from './spaces-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SpacesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacesDetailPageRoutingModule {}
