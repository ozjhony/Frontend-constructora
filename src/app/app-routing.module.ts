import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './publico/home/default/default.component';
import {ValidadorSesionGuard} from '../app/guardianes/validador-sesion.guard';
import { DetallespComponent } from './publico/detallesp/detallesp.component';

const routes: Routes = [
  
  {path:'home',
   component:DefaultComponent
  },
  {
   path:'',
   pathMatch:'full',
   redirectTo: 'home'
  },
  {
    path: 'detalles-producto/:codigo',
    component: DetallespComponent
  },
  {
    path:'seguridad',
    loadChildren:()=>import('./modulos/seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path:'parametros',
    loadChildren:()=>import('./modulos/parametrizacion/parametrizacion.module').then(x=>x.ParametrizacionModule),
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'usuario',
    loadChildren:()=>import('./modulos/usuario/usuario.module').then(x=>x.UsuarioModule)
  },
  {
    path:'clientes',
    loadChildren:()=>import('./modulos/clientes/clientes.module').then(x=>x.ClientesModule),
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'solicitud',
    loadChildren:()=>import('./modulos/solicitudes/solicitudes.module').then(x=>x.SolicitudesModule),
    canActivate:[ValidadorSesionGuard]
  },
  //ultimo
  {
    path:'**',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
