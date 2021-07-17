import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';
import { PaisService } from 'src/app/services/pais.service';

declare const initSelect: any;

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  fgValidador: FormGroup = new FormGroup({});
  ListaPais: PaisModelo[];

  constructor(private fb: FormBuilder,
    private servicio: CiudadService,
    private serviciopais: PaisService,
    private router: Router) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.getAllPaises();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
      paisId:['',[Validators.required]]
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let nom = this.ObtenerFgValidador.nombre.value;
    let paisId = this.ObtenerFgValidador.paisId.value;
    let modelo: CiudadModelo = new CiudadModelo();
    modelo.nombre = nom;
    modelo.paisId=parseInt(paisId);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-ciudad"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }

  getAllPaises() {
    this.serviciopais.ListarRegistros().subscribe(
      data => {
        this.ListaPais = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading paises");
      }
    );
  }


}
