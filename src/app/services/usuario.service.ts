import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { ServiceConfig } from '../config/service-config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  entity = 'usuarios';
  url: String = DatosGenerales.url;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method to call usuario POST in backend
   * @param usuario usuario data to save
   */
  usuarioRegistering(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}`, usuario, {
      headers: new HttpHeaders({})
    });
  }

  ListarRegistros(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.url}/usuarios`);
  }


  BuscarRegistro(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.url}/usuarios/${id}`);
  }

}
