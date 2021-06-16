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
    path:'parametrizacion',
    loadChildren:()=>import('./modulos/parametrizacion/parametrizacion.module').then(x=>x.ParametrizacionModule)
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
