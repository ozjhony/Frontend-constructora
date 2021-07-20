import { Component, OnInit } from '@angular/core';
import { DatosGenerales } from 'src/app/config/datos.generales';
import { SolicitudModelo } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  pagina: number = 1;
  regPorPagina: number = DatosGenerales.numRegistrosPorPagina;

  listaRegistros: SolicitudModelo[] = [];
  constructor(private servicio: SolicitudService) { }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
  }

  ObtenerListadoSolicitudes() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegistros = datos;
      },
      (err) => {
        alert("Error cargando el listado de registros");
      }
    );
  }

  CambioPagina(p: number){
    this.pagina = p;

}

}
