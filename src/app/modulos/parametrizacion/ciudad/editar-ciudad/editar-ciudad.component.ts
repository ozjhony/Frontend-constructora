import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { PaisModelo } from 'src/app/modelos/pais.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';
import { PaisService } from 'src/app/services/pais.service';

declare const initSelect: any;

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaPais: PaisModelo[];

  constructor(private fb: FormBuilder,
    private servicio: CiudadService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioPais:PaisService) {
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      paisId: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    let codigo = this.route.snapshot.params["codigo"];
    this.ObtenerRegistroPorCodigo(codigo);
    this.getAllPaises();
    
  }

  ObtenerRegistroPorCodigo(codigo: number) {
    this.servicio.BuscarRegistro(codigo).subscribe(
      (datos) => {
        console.log(datos);
        this.ObtenerFgValidador.nombre.setValue(datos.nombre);
        this.ObtenerFgValidador.paisId.setValue(datos.paisId);
        this.ObtenerFgValidador.codigo.setValue(datos.codigo);
      },
      (err) => {
        alert("No se encuentra el registro con codigo " + codigo);
      }
    );
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  getAllPaises() {
    this.servicioPais.ListarRegistros().subscribe(
      data => {
        this.ListaPais = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading categories");
      }
    );
  }

  ModificarRegistro() {
    let nombre = this.ObtenerFgValidador.nombre.value;
    let paisId = this.ObtenerFgValidador.paisId.value;
    let codigo = this.ObtenerFgValidador.codigo.value;
    let modelo: CiudadModelo = new CiudadModelo();
    modelo.nombre = nombre;
    modelo.paisId=parseInt(paisId);
    modelo.codigo=codigo;

    console.log(modelo.paisId);
    console.log(modelo.nombre);

    this.servicio.ModificarRegistro(modelo).subscribe(
      (datos) => {
        alert("Registro modificado correctamente.");
        this.router.navigate(["/parametros/listar-ciudad"]);
      },
      (err) => {
        alert("Error modificando el registro");
      }
    );
  }
}
