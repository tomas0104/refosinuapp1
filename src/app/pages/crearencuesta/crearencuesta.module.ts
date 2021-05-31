import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearencuestaPageRoutingModule } from './crearencuesta-routing.module';

import { CrearencuestaPage } from './crearencuesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearencuestaPageRoutingModule
  ],
  declarations: [CrearencuestaPage]
})
export class CrearencuestaPageModule {}
