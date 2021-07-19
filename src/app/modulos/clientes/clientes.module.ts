import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenesClientesComponent } from './imagenes-clientes/imagenes-clientes.component';
import { CrearInfoFinancieraComponent } from './informacion-financiera/crear-info-financiera/crear-info-financiera.component';
import { ListarInfoFinancieraComponent } from './informacion-financiera/listar-info-financiera/listar-info-financiera.component';
import { EliminarInfoFinancieraComponent } from './informacion-financiera/eliminar-info-financiera/eliminar-info-financiera.component';
import { EditarInfoFinancieraComponent } from './informacion-financiera/editar-info-financiera/editar-info-financiera.component';


@NgModule({
  declarations: [
    RegistrarClienteComponent,
    EliminarClientesComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ImagenesClientesComponent,
    CrearInfoFinancieraComponent,
    ListarInfoFinancieraComponent,
    EliminarInfoFinancieraComponent,
    EditarInfoFinancieraComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
