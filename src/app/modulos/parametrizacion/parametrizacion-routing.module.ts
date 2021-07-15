import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearBloqueComponent } from './bloque/crear-bloque/crear-bloque.component';
import { EditarBloqueComponent } from './bloque/editar-bloque/editar-bloque.component';
import { EliminarBloqueComponent } from './bloque/eliminar-bloque/eliminar-bloque.component';
import { ListarBloqueComponent } from './bloque/listar-bloque/listar-bloque.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';
import { CrearPaisComponent } from './pais/crear-pais/crear-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';
import { EliminarPaisComponent } from './pais/eliminar-pais/eliminar-pais.component';
import { ListarPaisComponent } from './pais/listar-pais/listar-pais.component';
import { CrearProyectosComponent } from './proyectos/crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './proyectos/editar-proyectos/editar-proyectos.component';
import { EliminarProyectosComponent } from './proyectos/eliminar-proyectos/eliminar-proyectos.component';
import { ListarProyectosComponent } from './proyectos/listar-proyectos/listar-proyectos.component';

const routes: Routes = [
  {
    path: 'crear-bloque',
    component:CrearBloqueComponent
  },
  {
    path: 'editar-bloque',
    component:EditarBloqueComponent
  },
  {
    path: 'eliminar-bloque',
    component:EliminarBloqueComponent
  },
  {
    path: 'listar-bloque',
    component:ListarBloqueComponent
  },
  {
    path: 'crear-ciudad',
    component:CrearCiudadComponent
  },
  {
    path: 'editar-ciudad',
    component:EditarCiudadComponent
  },
  {
    path: 'eliminar-ciudad',
    component:EliminarCiudadComponent
  },
  {
    path: 'listar-ciudad',
    component:ListarCiudadComponent
  },
  {
    path: 'crear-inmueble',
    component:CrearInmuebleComponent
  },
  {
    path: 'editar-inmueble',
    component:EditarInmuebleComponent
  },
  {
    path: 'eliminar-inmueble',
    component:EliminarInmuebleComponent
  },
  {
    path: 'listar-inmueble',
    component:ListarInmuebleComponent
  },
  {
    path: 'crear-pais',
    component:CrearPaisComponent
  },
  {
    path: 'editar-pais/:codigo',
    component:EditarPaisComponent
  },
  {
    path: 'eliminar-pais/:codigo',
    component:EliminarPaisComponent
  },
  {
    path: 'listar-pais',
    component:ListarPaisComponent
  },
  {
    path: 'crear-proyectos',
    component:CrearProyectosComponent
  },
  {
    path: 'editar-proyectos',
    component:EditarProyectosComponent
  },
  {
    path: 'eliminar-proyectos',
    component:EliminarProyectosComponent
  },
  {
    path: 'listar-proyectos',
    component:ListarProyectosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
