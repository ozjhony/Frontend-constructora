import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { InformacionFinancieraModelo } from '../modelos/InformacionFinanciera.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InfinancieraService {

  url: String = DatosGenerales.url;
  token?: String = "";

  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();  
  }
  

  ListarRegistros(): Observable<InformacionFinancieraModelo[]> {
    return this.http.get<InformacionFinancieraModelo[]>(`${this.url}/informacion-financieras`);
  }


  BuscarRegistro(id: number): Observable<InformacionFinancieraModelo> {
    return this.http.get<InformacionFinancieraModelo>(`${this.url}/informacion-financieras/${id}`);
  }

  AlmacenarRegistro(modelo: InformacionFinancieraModelo): Observable<InformacionFinancieraModelo> {
    return this.http.post<InformacionFinancieraModelo>(
      `${this.url}/informacion-financieras`,
      {
        totalIngreso: modelo.totalIngreso,
        telefonoTrabajo: modelo.telefonoTrabajo,
        cargo: modelo.cargo,
        nombreReferenciaFamiliar: modelo.nombreReferenciaFamiliar,
        telefonoReferenciaFamiliar: modelo.telefonoReferenciaFamiliar,
        nombreReferenciaPersonal: modelo.nombreReferenciaPersonal,
        telefonoReferenciaPersonal: modelo.telefonoReferenciaPersonal,
        tiempoTrabajoActual:modelo.tiempoTrabajoActual,
        clienteId: modelo.clienteId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: InformacionFinancieraModelo): Observable<InformacionFinancieraModelo> {
    return this.http.put<InformacionFinancieraModelo>(
      `${this.url}/informacion-financieras/${modelo.id}`,
      {
        totalIngreso: modelo.totalIngreso,
        telefonoTrabajo: modelo.telefonoTrabajo,
        cargo: modelo.cargo,
        nombreReferenciaFamiliar: modelo.nombreReferenciaFamiliar,
        telefonoReferenciaFamiliar: modelo.telefonoReferenciaFamiliar,
        nombreReferenciaPersonal: modelo.nombreReferenciaPersonal,
        telefonoReferenciaPersonal: modelo.telefonoReferenciaPersonal,
        //tiempoTrabajoActual:modelo.tiempoTrabajoActual,
        clienteId: modelo.clienteId
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(id: number): Observable<InformacionFinancieraModelo> {
    return this.http.delete<InformacionFinancieraModelo>(
      `${this.url}/informacion-financieras/${id}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }
}
