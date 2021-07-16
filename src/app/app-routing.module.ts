import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './publico/home/default/default.component';

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
    path:'seguridad',
    loadChildren:()=>import('./modulos/seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path:'parametros',
    loadChildren:()=>import('./modulos/parametrizacion/parametrizacion.module').then(x=>x.ParametrizacionModule)
  },
  {
    path:'usuario',
    loadChildren:()=>import('./modulos/usuario/usuario.module').then(x=>x.UsuarioModule)
  },
  {
    path:'clientes',
    loadChildren:()=>import('./modulos/clientes/clientes.module').then(x=>x.ClientesModule)
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
