import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Geolocalizacion1PageRoutingModule } from './geolocalizacion1-routing.module';

import { Geolocalizacion1Page } from './geolocalizacion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Geolocalizacion1PageRoutingModule
  ],
  declarations: [Geolocalizacion1Page]
})
export class Geolocalizacion1PageModule {}
