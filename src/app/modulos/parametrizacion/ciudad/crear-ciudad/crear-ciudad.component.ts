import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicio: CiudadService,
    private router: Router) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
      paisId:["",[Validators.required]]
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
    modelo.paisId=paisId;
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


}
