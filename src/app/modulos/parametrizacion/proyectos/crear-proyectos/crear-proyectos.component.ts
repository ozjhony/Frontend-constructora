import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ImagenpService } from 'src/app/services/imagenp.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaCiudad: CiudadModelo[];

  constructor(private fb: FormBuilder,
    private servicioCiudad: CiudadService,
    private servicio: ProyectoService,
    private router: Router,
    private service: ImagenpService) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.getAllCiudades();
    this.UploadImageFn();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      ciudadId:['',[Validators.required]]
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let nombre = this.ObtenerFgValidador.nombre.value;
    let descripcion = this.ObtenerFgValidador.descripcion.value;
    let imagen = this.ObtenerFgValidador.imagen.value;
    let ciudadId = this.ObtenerFgValidador.ciudadId.value;
    let modelo: ProyectoModelo = new ProyectoModelo();
    modelo.nombre = nombre;
    modelo.descripcion=descripcion;
    modelo.imagen=imagen;
    modelo.ciudadId=parseInt(ciudadId);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-proyectos"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
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
  UploadImageFn() {
    if (this.fgValidador.invalid) {
      
    } else {
      const formData = new FormData();
      formData.append('file', this.ObtenerFgValidador.imagen.value);
      this.service.UploadProyectoImage(formData).subscribe(
        data => {
          this.ObtenerFgValidador.imagen.setValue(data.filename);
          alert("la imagen fue cargada con exito.");
          
        },
        err => {
          alert("Error uploading image.");
        }
      );
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ObtenerFgValidador.imagen.setValue(file);
    }
  }


}
