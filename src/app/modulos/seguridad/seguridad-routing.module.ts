import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ResetearClaveComponent } from './resetear-clave/resetear-clave.component';
import {ValidadorNoSesionGuard} from '../../guardianes/validador-no-sesion.guard';

const routes: Routes = [


  {
    path: 'iniciar-sesion',
    component:IniciarSesionComponent,
    canActivate:[ValidadorNoSesionGuard]
  },
  {
    path: 'cerrar-sesion',
    component:CerrarSesionComponent
  },
  {
    path: 'cambiar-clave',
    component:CambiarClaveComponent
  },
  {
    path: 'resetear-clave',
    component:ResetearClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
