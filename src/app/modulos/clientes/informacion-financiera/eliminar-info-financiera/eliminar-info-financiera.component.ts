import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfinancieraService } from 'src/app/services/infinanciera.service';

@Component({
  selector: 'app-eliminar-info-financiera',
  templateUrl: './eliminar-info-financiera.component.html',
  styleUrls: ['./eliminar-info-financiera.component.css']
})
export class EliminarInfoFinancieraComponent implements OnInit {

  listaDatos: String[] = [];
  id: number = 0;

  constructor(
    private servicio: InfinancieraService,
    private router: Router,
    private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.ObtenerRegistroPorid(id);
  }

  ObtenerRegistroPorid(id: number) {
    this.servicio.BuscarRegistro(id).subscribe(
      (datos) => {
        if (datos.id) {
          this.listaDatos.push(datos.id?.toString());
         
          this.id = datos.id;
        }
      },
      (err) => {
        alert("No se encuentra el registro con id " + id);
      }
    );
  }

  EliminarRegistro() {
    let id = this.id;
    this.servicio.EliminarRegistro(id).subscribe(
      (datos) => {
        alert("Registro eliminado correctamente.");
        this.router.navigate(["/clientes/eliminar-info-financiera"]);
      },
      (err) => {
        alert("Error eliminando el registro");
      }
    );
  }

}
