import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { BloqueService } from 'src/app/services/bloque.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-crear-bloque',
  templateUrl: './crear-bloque.component.html',
  styleUrls: ['./crear-bloque.component.css']
})
export class CrearBloqueComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaProyecto: ProyectoModelo[];

  constructor(private fb: FormBuilder,
    private servicioProyecto: ProyectoService,
    private servicio: BloqueService,
    private router: Router) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.getAllProyectos();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      proyectoId:['',[Validators.required]]
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let nombre = this.ObtenerFgValidador.nombre.value;
    let descripcion = this.ObtenerFgValidador.descripcion.value;
    let proyectoId = this.ObtenerFgValidador.proyectoId.value;
    let modelo: BloqueModelo = new BloqueModelo();
    modelo.nombre = nombre;
    modelo.descripcion=descripcion;
    modelo.proyectoId=parseInt(proyectoId);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-bloque"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }

  getAllProyectos() {
    this.servicioProyecto.ListarRegistros().subscribe(
      data => {
        this.ListaProyecto = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading paises");
      }
    );
  }


}
