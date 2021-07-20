import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { SolicitudModelo } from '../modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: String = DatosGenerales.url;
  token?: String = "";

  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();  
  }
  

  ListarRegistros(): Observable<SolicitudModelo[]> {
    return this.http.get<SolicitudModelo[]>(`${this.url}/solicitudes`);
  }


  BuscarRegistro(id: number): Observable<SolicitudModelo> {
    return this.http.get<SolicitudModelo>(`${this.url}/solicitudes/${id}`);
  }

  AlmacenarRegistro(modelo: SolicitudModelo): Observable<SolicitudModelo> {
    return this.http.post<SolicitudModelo>(
      `${this.url}/solicitudes`,
      {
        fechaSolicitud: modelo.fechaSolicitud,
        estadoSolicitud: modelo.estadoSolicitud,
        ofertaEconomica:modelo.ofertaEconomica,
        clienteId: modelo.clienteId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: SolicitudModelo): Observable<SolicitudModelo> {
    return this.http.put<SolicitudModelo>(
      `${this.url}/solicitudes/${modelo.codigo}`,
      {
        fechaSolicitud: modelo.fechaSolicitud,
        estadoSolicitud: modelo.estadoSolicitud,
        ofertaEconomica:modelo.ofertaEconomica,
        clienteId: modelo.clienteId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(codigo: number): Observable<SolicitudModelo> {
    return this.http.delete<SolicitudModelo>(
      `${this.url}/solicitudes/${codigo}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }
}
