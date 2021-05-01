import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { CrearPaisComponent } from './pais/crear-pais/crear-pais.component';
import { ListarPaisComponent } from './pais/listar-pais/listar-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';
import { EliminarPaisComponent } from './pais/eliminar-pais/eliminar-pais.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { ListarProyectosComponent } from './proyectos/listar-proyectos/listar-proyectos.component';
import { CrearProyectosComponent } from './proyectos/crear-proyectos/crear-proyectos.component';
import { EliminarProyectosComponent } from './proyectos/eliminar-proyectos/eliminar-proyectos.component';
import { EditarProyectosComponent } from './proyectos/editar-proyectos/editar-proyectos.component';
import { EditarBloqueComponent } from './bloque/editar-bloque/editar-bloque.component';
import { EliminarBloqueComponent } from './bloque/eliminar-bloque/eliminar-bloque.component';
import { ListarBloqueComponent } from './bloque/listar-bloque/listar-bloque.component';
import { CrearBloqueComponent } from './bloque/crear-bloque/crear-bloque.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';


@NgModule({
  declarations: [
    CrearPaisComponent,
    ListarPaisComponent,
    EditarPaisComponent,
    EliminarPaisComponent,
    EliminarCiudadComponent,
    EditarCiudadComponent,
    CrearCiudadComponent,
    ListarCiudadComponent,
    ListarProyectosComponent,
    CrearProyectosComponent,
    EliminarProyectosComponent,
    EditarProyectosComponent,
    EditarBloqueComponent,
    EliminarBloqueComponent,
    ListarBloqueComponent,
    CrearBloqueComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    EliminarInmuebleComponent,
    ListarInmuebleComponent
  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule
  ]
})
export class ParametrizacionModule { }
