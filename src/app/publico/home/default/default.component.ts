import { Component, OnInit } from '@angular/core';

declare var inyectarCodigo: any;

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // this.ObtenerCorreoCliente();
    
    
  }

  
/* 
  ObtenerCorreoCliente() {

    
    let datos = localStorage.getItem("session-data");
    if (datos) {
      let rol = JSON.parse(datos);
      this.servicio.obtenerCorreo(rol.username).subscribe(
        (datos) => {
          inyectarCodigo(datos.nombre,datos.apellido);
        },
        (err) => {
          alert("Error cargando el listado de registros");
        }
      );
    } */

}
