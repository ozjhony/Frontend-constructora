import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { ServiceConfig } from '../config/service-config';
import { ResetearContrasenaModelo } from '../modelos/resetear-contrasena.modelo';
import { UserLogModelo } from '../modelos/userlog.modelo';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url: String = DatosGenerales.url;
  datosDeSesion: BehaviorSubject<UserLogModelo> = new BehaviorSubject<UserLogModelo>(new UserLogModelo());


  constructor(private http: HttpClient) {
    this.VerificarSesion();
    console.log(this.url);
   }

   BuscarRegistro(id: String): Observable<UserLogModelo> {
    return this.http.get<UserLogModelo>(`${this.url}/userlogs/${id}`);
  }

   ModificarRegistro(modelo: UserLogModelo): Observable<UserLogModelo> {
    return this.http.put<UserLogModelo>(
      `${this.url}/userlogs/${modelo.id}`,
      {
        clave: modelo.clave,
        id:modelo.id
      });
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
    return this.http.post<any>(`http://localhost:3000/identificar-usuario`,
      {
        nombre_usuario: modelo.nombre_usuario,
        clave: modelo.clave
        
      },
      {
        headers: new HttpHeaders({})
      }
      
      ); 
      
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

  ObtenerDatosSesion() {
    return this.datosDeSesion.asObservable();
  }

  getSessionData() {
    let currentSession = localStorage.getItem('session');
    return currentSession;
  }

  VerifyRoleInSession(roleId): Boolean {
    let currentSession = JSON.parse(this.getSessionData());
    return (currentSession.tipoUsuarioId == roleId);
  }

  sessionExist(): Boolean {
    let currentSession = this.getSessionData();
    return (currentSession) ? true : false;
  }

  ObtenerToken() {
    let datos = localStorage.getItem("session-data");
    if (datos) {
      let obj: UserLogModelo = JSON.parse(datos);
      return obj.tk;
    } else {
      return "";
    }
  }

  PasswordReset(data: ResetearContrasenaModelo): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}reset-password`, data, {
      headers: new HttpHeaders({})
    });
  }

  

  ValidarSesionPorToken():boolean {
    let datos = localStorage.getItem("session-data");
    if (datos) {
      let obj: UserLogModelo = JSON.parse(datos);
      // invocar al backend 
      return true;
    } else {
      return false;
    }
  }

  RemoverLocalStorage() {
    let datos = localStorage.removeItem("session-data");
    this.RefrescarDatosSesion(new UserLogModelo());
  }

 /*  DefinirRol(modelo: UserLogModelo) {
    let datos = localStorage.getItem("session-data");
    if (datos) {
      let rol: UserLogModelo = JSON.parse(datos);
      
      switch (String(rol.tipoUsuarioId)) {
        case "607a19becdfb20143c1fe06d":
          alert("Admin")
          modelo.isAdmin = true;
          return true;
          break;
        case "607a1a43cdfb20143c1fe06e":
          alert("Vendedor")
          modelo.isAdmin = false;
          return true;
          break;
        default:
          return false;
      }
    } else {
      return false;
    }
  } */

}
