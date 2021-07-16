import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarClienteComponent,
    EliminarClientesComponent,
    EditarClienteComponent,
    ListarClienteComponent
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
