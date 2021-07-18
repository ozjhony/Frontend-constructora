import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { InmuebleModelo } from '../modelos/inmueble.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  url: String = DatosGenerales.url;
  token?: String = "";
  filter: String = '?filter={"include":[{"relation":"proyectos"}]}';
  
  


  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();  
  }

  ListarRegistros(): Observable<InmuebleModelo[]> {
    return this.http.get<InmuebleModelo[]>(`${this.url}/inmuebles`);
  }


  BuscarRegistro(codigo: number): Observable<InmuebleModelo> {
    return this.http.get<InmuebleModelo>(`${this.url}/inmuebles/${codigo}`);
  }

  AlmacenarRegistro(modelo: InmuebleModelo): Observable<InmuebleModelo> {
    return this.http.post<InmuebleModelo>(
      `${this.url}/inmuebles`,
      {
       
        identificador: modelo.identificador,
        valor:modelo.valor,
        bloqueId: modelo.bloqueId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: InmuebleModelo): Observable<InmuebleModelo> {
    return this.http.put<InmuebleModelo>(
      `${this.url}/inmuebles/${modelo.codigo}`,
      {
       
        identificador: modelo.identificador,
        valor:modelo.valor,
        bloqueId: modelo.bloqueId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(codigo: number): Observable<InmuebleModelo> {
    return this.http.delete<InmuebleModelo>(
      `${this.url}/inmuebles/${codigo}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }
}
