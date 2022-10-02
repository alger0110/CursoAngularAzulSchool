import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, HttpClientModule],
})
export class HomeModule {}
