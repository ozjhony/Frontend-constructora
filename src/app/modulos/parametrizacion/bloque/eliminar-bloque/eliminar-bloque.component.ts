import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloqueService } from 'src/app/services/bloque.service';

@Component({
  selector: 'app-eliminar-bloque',
  templateUrl: './eliminar-bloque.component.html',
  styleUrls: ['./eliminar-bloque.component.css']
})
export class EliminarBloqueComponent implements OnInit {

  listaDatos: String[] = [];
  codigo: number = 0;

  constructor(
    private servicio: BloqueService,
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
        this.router.navigate(["/parametros/listar-bloque"]);
      },
      (err) => {
        alert("Error eliminando el registro");
      }
    );
  }

}
