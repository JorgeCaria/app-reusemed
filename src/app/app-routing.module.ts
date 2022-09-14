import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'geolocalizacion1',
    pathMatch: 'full'
  },
  {
    path: 'geolocalizacion1',
    loadChildren: () => import('./pages/geolocalizacion1/geolocalizacion1.module').then( m => m.Geolocalizacion1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
