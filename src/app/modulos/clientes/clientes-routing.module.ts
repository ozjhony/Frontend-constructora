import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { CrearInfoFinancieraComponent } from './informacion-financiera/crear-info-financiera/crear-info-financiera.component';
import { EliminarInfoFinancieraComponent } from './informacion-financiera/eliminar-info-financiera/eliminar-info-financiera.component';
import { ListarInfoFinancieraComponent } from './informacion-financiera/listar-info-financiera/listar-info-financiera.component';
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
  },
  {
    path:'crear-info-financiera',
    component:CrearInfoFinancieraComponent
  },
  {
    path:'listar-info-financiera',
    component:ListarInfoFinancieraComponent
  },
  {
    path:'eliminar-info-financiera/:id',
    component:EliminarInfoFinancieraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
