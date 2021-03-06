import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { ClienteModelo } from 'src/app/modelos/cliente.modelo';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaCiudad: CiudadModelo[];

  constructor(private fb: FormBuilder,
    private servicio: ClienteService,
    private router: Router,
    private servicioCiudad: CiudadService) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.getAllCiudades();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudadId: ['', [Validators.required]],
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let nombre = this.ObtenerFgValidador.nombre.value;
    let apellido = this.ObtenerFgValidador.apellido.value;
    let cedula = this.ObtenerFgValidador.cedula.value;
    let fecha_nacimiento = this.ObtenerFgValidador.fecha_nacimiento.value;
    let correo = this.ObtenerFgValidador.correo.value;
    let celular = this.ObtenerFgValidador.celular.value;
    let direccion = this.ObtenerFgValidador.direccion.value;
    let ciudadId = this.ObtenerFgValidador.ciudadId.value;
    let modelo: ClienteModelo = new ClienteModelo();
    modelo.nombre = nombre;
    modelo.apellido=apellido;
    modelo.cedula=cedula;
    modelo.fecha_nacimiento= fecha_nacimiento;
    modelo.correo=correo;
    modelo.celular= celular;
    modelo.direccion= direccion;
    modelo.ciudadId= parseInt(ciudadId);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/clientes/listar-cliente"]);
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


}
