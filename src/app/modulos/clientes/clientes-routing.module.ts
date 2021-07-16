import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';

const routes: Routes = [
  {
    path:'registrar-cliente',
    component:RegistrarClienteComponent
  },
  {
    path:'listar-cliente',
    component:ListarClienteComponent
  },
  {
    path:'eliminar-clientes',
    component:EliminarClientesComponent,
  },
  {
    path:'editar-cliente',
    component:EliminarClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
