import { LoginGuard } from './../security/guards/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NameuserGuard } from '../security/guards/nameuser.guard';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
    canActivate:[LoginGuard, NameuserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
