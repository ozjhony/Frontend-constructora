import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-crear-pais',
  templateUrl: './crear-pais.component.html',
  styleUrls: ['./crear-pais.component.css']
})
export class CrearPaisComponent implements OnInit {
  
  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicio: PaisService,
    private router: Router) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let nom = this.ObtenerFgValidador.nombre.value;
    let modelo: PaisModelo = new PaisModelo();
    modelo.nombre = nom;
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-pais"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }



}
