import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Geolocalizacion1Page } from './geolocalizacion1.page';

const routes: Routes = [
  {
    path: '',
    component: Geolocalizacion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Geolocalizacion1PageRoutingModule {}
