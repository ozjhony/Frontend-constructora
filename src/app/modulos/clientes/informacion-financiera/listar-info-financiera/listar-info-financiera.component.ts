import { Component, OnInit } from '@angular/core';
import { DatosGenerales } from 'src/app/config/datos.generales';
import { InformacionFinancieraModelo } from 'src/app/modelos/InformacionFinanciera.modelo';
import { InfinancieraService } from 'src/app/services/infinanciera.service';

@Component({
  selector: 'app-listar-info-financiera',
  templateUrl: './listar-info-financiera.component.html',
  styleUrls: ['./listar-info-financiera.component.css']
})
export class ListarInfoFinancieraComponent implements OnInit {

  pagina: number = 1;
  regPorPagina: number = DatosGenerales.numRegistrosPorPagina;

  listaRegistros: InformacionFinancieraModelo[] = [];
  constructor(private servicio: InfinancieraService) { }

  ngOnInit(): void {
    this.ObtenerListadoPaises();
  }

  ObtenerListadoPaises() {
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
