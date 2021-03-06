import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ImagenpService } from 'src/app/services/imagenp.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaCiudad: CiudadModelo[];

  constructor(private fb: FormBuilder,
    private servicio: ProyectoService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioCiudad:CiudadService,
    private service: ImagenpService) {
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      ciudadId: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    let codigo = this.route.snapshot.params["codigo"];
    this.ObtenerRegistroPorCodigo(codigo);
    this.getAllCiudades();
    
  }

  ObtenerRegistroPorCodigo(codigo: number) {
    this.servicio.BuscarRegistro(codigo).subscribe(
      (datos) => {
        console.log(datos);
        this.ObtenerFgValidador.nombre.setValue(datos.nombre);
        this.ObtenerFgValidador.ciudadId.setValue(datos.ciudadId);
        this.ObtenerFgValidador.codigo.setValue(datos.codigo);
        this.ObtenerFgValidador.descripcion.setValue(datos.descripcion);

      },
      (err) => {
        alert("No se encuentra el registro con codigo " + codigo);
      }
    );
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  getAllCiudades() {
    this.servicioCiudad.ListarRegistros().subscribe(
      data => {
        this.ListaCiudad = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading categories");
      }
    );
  }

  ModificarRegistro() {
    let nombre = this.ObtenerFgValidador.nombre.value;
    let ciudadId = this.ObtenerFgValidador.ciudadId.value;
    let codigo = this.ObtenerFgValidador.codigo.value;
    let descripcion = this.ObtenerFgValidador.descripcion.value;
    let modelo: ProyectoModelo = new ProyectoModelo();
    modelo.nombre = nombre;
    modelo.ciudadId=parseInt(ciudadId);
    modelo.codigo=codigo;
    modelo.descripcion=descripcion;

    
    console.log(modelo.nombre);

    this.servicio.ModificarRegistro(modelo).subscribe(
      (datos) => {
        alert("Registro modificado correctamente.");
        this.router.navigate(["/parametros/listar-proyectos"]);
      },
      (err) => {
        alert("Error modificando el registro");
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
