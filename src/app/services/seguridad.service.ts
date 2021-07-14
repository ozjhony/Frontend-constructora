import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { UserLogModelo } from '../modelos/userlog.modelo';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url: String = DatosGenerales.url;
  datosDeSesion: BehaviorSubject<UserLogModelo> = new BehaviorSubject<UserLogModelo>(new UserLogModelo());


  constructor(private http: HttpClient) {
    this.VerificarSesion();
   }

   RefrescarDatosSesion(usuarioModelo: UserLogModelo) {
    this.datosDeSesion.next(usuarioModelo);
  }

   VerificarSesion() {
    let datos = localStorage.getItem("session-data");
    if (datos) {
      let datosEnObjeto: UserLogModelo = JSON.parse(datos);
      datosEnObjeto.isLoggedIn = true;
      this.RefrescarDatosSesion(datosEnObjeto);
    }
  }

   VerificarUsuario(modelo: UserLogModelo): Observable<any> {
    return this.http.post<any>(
      `${this.url}/identificar-usuario`,
      {
        nombre_usuario: modelo.nombre_usuario,
        clave: modelo.clave
      },
      {
        headers: new HttpHeaders({

        })
      });
  }

  AlmacenarDatosSesionEnLocal(usuarioModelo: UserLogModelo): Boolean {
    let datos = localStorage.getItem("session-data");
    if (datos) {
      return false;
    } else {
      let datosString = JSON.stringify(usuarioModelo);
      localStorage.setItem("session-data", datosString);
      usuarioModelo.isLoggedIn = true;
      this.RefrescarDatosSesion(usuarioModelo);
      return true;
    }
  }
}