import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-eliminar-inmueble',
  templateUrl: './eliminar-inmueble.component.html',
  styleUrls: ['./eliminar-inmueble.component.css']
})
export class EliminarInmuebleComponent implements OnInit {

  listaDatos: String[] = [];
  codigo: number = 0;

  constructor(
    private servicio: InmuebleService,
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
        if (datos.codigo && datos.identificador) {
          this.listaDatos.push(datos.codigo?.toString());
          this.listaDatos.push(datos.identificador);
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
        this.router.navigate(["/parametros/listar-bloque"]);
      },
      (err) => {
        alert("Error eliminando el registro");
      }
    );
  }

}
