import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { ProyectoModelo } from '../modelos/proyecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url: String = DatosGenerales.url;
  token?: String = "";
  filter: String = '?filter={"include":[{"relation":"pais"}]}';
  
  


  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();  
  }

  ListarRegistros(): Observable<ProyectoModelo[]> {
    return this.http.get<ProyectoModelo[]>(`${this.url}/proyectos`);
  }


  BuscarRegistro(codigo: number): Observable<ProyectoModelo> {
    return this.http.get<ProyectoModelo>(`${this.url}/proyectos/${codigo}`);
  }

  AlmacenarRegistro(modelo: ProyectoModelo): Observable<ProyectoModelo> {
    return this.http.post<ProyectoModelo>(
      `${this.url}/proyectos`,
      {
        nombre: modelo.nombre,
        descripcion: modelo.descripcion,
        imagen:modelo.imagen,
        ciudadId: modelo.ciudadId,
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: ProyectoModelo): Observable<ProyectoModelo> {
    return this.http.put<ProyectoModelo>(
      `${this.url}/proyectos/${modelo.codigo}`,
      {
        nombre: modelo.nombre,
        descripcion: modelo.descripcion,
        imagen:modelo.imagen,
        ciudadId: modelo.ciudadId,
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(codigo: number): Observable<ProyectoModelo> {
    return this.http.delete<ProyectoModelo>(
      `${this.url}/proyectos/${codigo}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }
}
