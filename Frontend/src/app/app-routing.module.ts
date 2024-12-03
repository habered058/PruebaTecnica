import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'espacios',
    loadChildren: () => import('./modules/Spaces/pages/spaces-list/spaces-list.module').then( m => m.SpacesListPageModule)
  },
  {
    path: '',
    redirectTo: 'espacios',
    pathMatch: 'full'
  },
  {
    path: 'espacios-detalles/:id',
    loadChildren: () => import('./modules/Spaces/pages/spaces-detail/spaces-detail.module').then( m => m.SpacesDetailPageModule)
  },
  {
    path: 'espacios-agregar',
    loadChildren: () => import('./modules/Spaces/pages/space-add/space-add.module').then( m => m.SpaceAddPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload', })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
