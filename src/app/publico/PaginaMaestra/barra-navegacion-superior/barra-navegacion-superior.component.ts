import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { Subscription } from 'rxjs';
import { UserLogModelo } from 'src/app/modelos/userlog.modelo';

@Component({
  selector: 'app-barra-navegacion-superior',
  templateUrl: './barra-navegacion-superior.component.html',
  styleUrls: ['./barra-navegacion-superior.component.css']
})
export class BarraNavegacionSuperiorComponent implements OnInit {

  isLoggedIn: boolean = false;

  Usuario:String;



  constructor(private servicioSeguridad: SeguridadService) { }

  suscripcion: Subscription = new Subscription();

  ngOnInit(): void {
    this.suscripcion = this.servicioSeguridad.ObtenerDatosSesion().subscribe(
      (datos) => {
        this.isLoggedIn = datos.isLoggedIn;
        this.Usuario=datos.nombre_usuario;
        
      },
      (error) => {

      }
    );
  }

}
