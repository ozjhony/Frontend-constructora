import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { CiudadModelo } from '../modelos/ciudad.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url: String = DatosGenerales.url;
  token?: String = "";


  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();  
  }

  ListarRegistros(): Observable<CiudadModelo[]> {
    return this.http.get<CiudadModelo[]>(`${this.url}/ciudades`);
  }


  BuscarRegistro(codigo: number): Observable<CiudadModelo> {
    return this.http.get<CiudadModelo>(`${this.url}/ciudades/${codigo}`);
  }

  AlmacenarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {
    return this.http.post<CiudadModelo>(
      `${this.url}/ciudades`,
      {
        nombre: modelo.nombre,
        paisId: modelo.paisId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {
    return this.http.put<CiudadModelo>(
      `${this.url}/ciudades/${modelo.codigo}`,
      {
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(codigo: number): Observable<CiudadModelo> {
    return this.http.delete<CiudadModelo>(
      `${this.url}/ciudades/${codigo}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


}
