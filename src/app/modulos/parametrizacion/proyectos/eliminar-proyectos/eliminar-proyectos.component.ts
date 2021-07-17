import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-eliminar-proyectos',
  templateUrl: './eliminar-proyectos.component.html',
  styleUrls: ['./eliminar-proyectos.component.css']
})
export class EliminarProyectosComponent implements OnInit {

  listaDatos: String[] = [];
  codigo: number = 0;

  constructor(
    private servicio: ProyectoService,
    private router: Router,
    private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    let codigo = this.route.snapshot.params["codigo"];
    this.ObtenerRegistroPorCodigo(codigo);
  }

  ObtenerRegistroPorCodigo(codigo: number) {
    this.servicio.BuscarRegistro(codigo).subscribe(
      (datos) => {
        if (datos.codigo && datos.nombre) {
          this.listaDatos.push(datos.codigo?.toString());
          this.listaDatos.push(datos.nombre);
          this.codigo = datos.codigo;
        }
      },
      (err) => {
        alert("No se encuentra el registro con id " + codigo);
      }
    );
  }

  EliminarRegistro() {
    let codigo = this.codigo;
    this.servicio.EliminarRegistro(codigo).subscribe(
      (datos) => {
        alert("Registro eliminado correctamente.");
        this.router.navigate(["/parametros/listar-proyectos"]);
      },
      (err) => {
        alert("Error eliminando el registro");
      }
    );
  }

}
