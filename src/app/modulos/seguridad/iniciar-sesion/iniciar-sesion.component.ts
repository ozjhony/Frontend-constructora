import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from '../../../services/seguridad.service';
import * as crypto from 'crypto-js';
import { UserLogModelo } from '../../../modelos/userlog.modelo';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
   
  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

    ngOnInit(): void {
      this.ConstruirFormulario();
    }

  ConstruirFormulario() {
     this.fgValidador = this.fb.group({
     nombre_usuario: ['alejandrojpg1996@gmail.com', [Validators.required, Validators.email]],
     clave: ['', [Validators.required, Validators.min(3)]]
      });
   }


  get ObtenerFgvalidador() {
    return this.fgValidador.controls;
  }

  ValidarIdentificacion() {
    if (this.fgValidador.invalid) {
      alert("Formulario inválido")
    } else {
      let nombre_usuario = this.ObtenerFgvalidador.nombre_usuario.value;
      let clave = this.ObtenerFgvalidador.clave.value;
      //let claveCifrada = crypto.MD5(clave).toString();
      let modelo = new UserLogModelo();
      modelo.nombre_usuario = nombre_usuario;
      modelo.clave = clave;
      this.servicioSeguridad.VerificarUsuario(modelo).subscribe(
       (datos: UserLogModelo) => {
            this.servicioSeguridad.AlmacenarDatosSesionEnLocal(datos);
            this.router.navigate(["/inicio"]);
        },
        (error) => {
          alert("Datos inválidos");
          console.log(error);
          console.log(modelo.nombre_usuario);
          console.log(modelo.clave);
        }
      );
    }
  }

}
