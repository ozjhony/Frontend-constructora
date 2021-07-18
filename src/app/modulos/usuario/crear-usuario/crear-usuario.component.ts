import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { TipoUsuarioModelo } from 'src/app/modelos/tipoUsuario.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import{UsuarioModel}from '../../../modelos/usuario.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
   

  ListaCiudad: CiudadModelo[];

  fgvalidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service:UsuarioService,
    private router: Router,
    private servicioCiudad: CiudadService,
  ) {

  }

  ngOnInit(): void {

   this.FormBuilding();
  
   this.getAllCiudades();
  }

   FormBuilding(){
     
    this.fgvalidator=this.fb.group({
      nombres: ['',[Validators.required, Validators.minLength(5)]],
      apellido: ['',[Validators.required, Validators.minLength(3)]],
      documento: ['',[Validators.required, Validators.minLength(7)]],
      correo: ['',[Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
      ciudad: ['',[Validators.required, Validators.minLength(3)]],
      tipo_usuario: ['',[Validators.required, Validators.minLength(5)]]
    })
   }

   registroUsuario (){
    if(this.fgvalidator.invalid){
      alert('invalid form...');
    }
    else{
      let model=this.getUsuarioData();
      this.service.usuarioRegistering(model);
      
    }
   }

   UsuarioRegisterFn() {
    if (this.fgvalidator.invalid) {
      //alert("Invalid form.");
    } else {
      //showMessage("Registering...");
      let model = this.getUsuarioData();
      this.service.usuarioRegistering(model).subscribe(
        data => {
          alert("Register succesfully, you can find your password in your email inbox.");
          this.router.navigate(['/security/login']);
        },
        error => {
          alert("Error registering.");
        }
      );
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

   

   getAllCiudades() {
    this.servicioCiudad.ListarRegistros().subscribe(
      data => {
        this.ListaCiudad = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading ciudades");
      }
    );
  }

  


  

}
