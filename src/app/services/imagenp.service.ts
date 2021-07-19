import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service-config';
import { ProyectoImgModelo } from '../modelos/proyectoimg.model';
import { UploadImageModel } from '../modelos/UploadImageModel.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenpService {

  entity = 'image';
  token: String = '';
  filter: String = '?filter={"include":[{"relation":"product"}]}';

  constructor(private http: HttpClient, private securityService: SeguridadService) {
    this.token = this.securityService.ObtenerToken();
  }

  /**
   * Get al records of a collection
   */
  getAllRecords(): Observable<ProyectoImgModelo[]> {
    return this.http.get<ProyectoImgModelo[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  /**
   * Get record by id
   * @param id id to search
   */
  getRecordById(id: String): Observable<ProyectoImgModelo> {
    return this.http.get<ProyectoImgModelo>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }


  getRecordsByProductId(productId: String): Observable<ProyectoImgModelo[]> {
    return this.http.get<ProyectoImgModelo[]>(`${ServiceConfig.BASE_URL}/products/${productId}/images`);
  }


  UploadProyectoImage(formData: FormData): Observable<UploadImageModel> {
    return this.http.post<UploadImageModel>(`${ServiceConfig.BASE_URL}CargarImagenProyecto?`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  DeleteRecord(recordId: String): Observable<any> {
    return this.http.delete(`${ServiceConfig.BASE_URL}/product-image/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
