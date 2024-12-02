import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacesListPage } from './spaces-list.page';

const routes: Routes = [
  {
    path: '',
    component: SpacesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacesListPageRoutingModule {}
