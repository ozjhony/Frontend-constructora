import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
   private http:HttpClient
  ) { }


  UsuarioRegister(model:UsuarioModel){

  }
}
