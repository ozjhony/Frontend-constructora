import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { ClienteModelo } from '../modelos/cliente.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: String = DatosGenerales.url;
  token?: String = "";

  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();  
  }
  

  ListarRegistros(): Observable<ClienteModelo[]> {
    return this.http.get<ClienteModelo[]>(`${this.url}/clientes`);
  }


  BuscarRegistro(id: number): Observable<ClienteModelo> {
    return this.http.get<ClienteModelo>(`${this.url}/clientes/${id}`);
  }

  AlmacenarRegistro(modelo: ClienteModelo): Observable<ClienteModelo> {
    return this.http.post<ClienteModelo>(
      `${this.url}/clientes`,
      {
        nombre: modelo.nombre,
        apellido: modelo.apellido,
        cedula: modelo.cedula,
        fecha_nacimiento: modelo.fecha_nacimiento,
        //foto?: string;
        correo: modelo.correo,
        celular: modelo.celular,
        direccion: modelo.direccion,
        ciudadId: modelo.ciudadId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: ClienteModelo): Observable<ClienteModelo> {
    return this.http.put<ClienteModelo>(
      `${this.url}/clientes/${modelo.id}`,
      {
        nombre: modelo.nombre,
        apellido: modelo.apellido,
        cedula: modelo.cedula,
        fecha_nacimiento: modelo.fecha_nacimiento,
        //foto?: string;
        correo: modelo.correo,
        celular: modelo.celular,
        direccion: modelo.direccion,
        ciudadId: modelo.ciudadId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(id: number): Observable<ClienteModelo> {
    return this.http.delete<ClienteModelo>(
      `${this.url}/clientes/${id}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

}
