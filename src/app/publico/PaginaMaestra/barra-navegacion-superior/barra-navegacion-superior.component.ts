import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { Subscription } from 'rxjs';
import { UserLogModelo } from 'src/app/modelos/userlog.modelo';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-barra-navegacion-superior',
  templateUrl: './barra-navegacion-superior.component.html',
  styleUrls: ['./barra-navegacion-superior.component.css']
})
export class BarraNavegacionSuperiorComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: UsuarioModel;
  userlog:UserLogModelo;

  Usuario:String;
  listaRegistros: UsuarioModel[] = [];



  constructor(private servicioSeguridad: SeguridadService,
    private servicio: UsuarioService) { }

  suscripcion: Subscription = new Subscription();

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
    this.suscripcion = this.servicioSeguridad.ObtenerDatosSesion().subscribe(
      (datos) => {
        this.isLoggedIn = datos.isLoggedIn;
        this.Usuario=datos.nombre;
        console.log(this.Usuario);
        
      },
      (error) => {

      }
    );
  }

  

  ObtenerListadoUsuarios() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegistros = datos;
      },
      (err) => {
        alert("Error cargando el listado de registros");
      }
    );
  }
  

}
