import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    ListarSolicitudComponent,
    EditarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudesModule { }
