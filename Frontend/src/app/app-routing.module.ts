import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'espacios',
    loadChildren: () => import('./pages/Spaces/spaces-list/spaces-list.module').then( m => m.SpacesListPageModule)
  },
  {
    path: '',
    redirectTo: 'espacios',
    pathMatch: 'full'
  },
  {
    path: 'espacios-detalles/:id',
    loadChildren: () => import('./pages/Spaces/spaces-detail/spaces-detail.module').then( m => m.SpacesDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
