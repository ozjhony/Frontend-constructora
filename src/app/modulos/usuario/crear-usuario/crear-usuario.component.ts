import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import{UsuarioModel}from '../../../modelos/usuario.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {


  fgvalidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service:UsuarioService
  ) {

  }

  ngOnInit(): void {

   this.FormBuilding();
  }

   FormBuilding(){
     
    this.fgvalidator=this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(5)]],
      apellido: ['',[Validators.required, Validators.minLength(10)]],
      documento: ['',[Validators.required, Validators.minLength(7)]],
      correo: ['',[Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
      ciudad: ['',[Validators.required, Validators.minLength(3)]],
      codigoPais: [],
      tipo_usuario: ['',[Validators.required, Validators.minLength(5)]]
    })
   }

   registroUsuario (){
    if(this.fgvalidator.invalid){
      alert('invalid form...');
    }
    else{
      let model=this.getUsuarioData();
      this.service.UsuarioRegister(model);
      
    }
   }

   getUsuarioData(): UsuarioModel{
     let model= new UsuarioModel();
        model.nombres=   this.fgv.nombres.value;
        model.apellido=  this.fgv.apellido.value;
        model.documento= this.fgv.documento.value;
        model.correo=    this.fgv.correo.value;
        model.telefono=  this.fgv.telefono.value;
        model.ciudad =  this.fgv.ciudad.value;
        model.tipo_usuario= this.fgv.tipo_usuario.value;
        return model;

   }

   get fgv(){
     return this.fgvalidator.controls;
   }

  


  

}
