import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformacionFinancieraModelo } from 'src/app/modelos/InformacionFinanciera.modelo';
import { ClienteService } from 'src/app/services/cliente.service';
import { InfinancieraService } from 'src/app/services/infinanciera.service';

@Component({
  selector: 'app-crear-info-financiera',
  templateUrl: './crear-info-financiera.component.html',
  styleUrls: ['./crear-info-financiera.component.css']
})
export class CrearInfoFinancieraComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  

  constructor(private fb: FormBuilder,
    private servicioCliente: ClienteService,
    private servicio: InfinancieraService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      totalIngreso: ['', [Validators.required]],
      telefonoTrabajo: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      nombreReferenciaFamiliar: ['', [Validators.required]],
      telefonoReferenciaFamiliar: ['', [Validators.required]],
      nombreReferenciaPersonal: ['', [Validators.required]],
      telefonoReferenciaPersonal: ['', [Validators.required]],
      tiempoTrabajoActual: ['', [Validators.required]],
      clienteId: ['', [Validators.required]],
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let totalIngreso = this.ObtenerFgValidador.totalIngreso.value;
    let telefonoTrabajo = this.ObtenerFgValidador.telefonoTrabajo.value;
    let cargo = this.ObtenerFgValidador.cargo.value;
    let nombreReferenciaFamiliar = this.ObtenerFgValidador.nombreReferenciaFamiliar.value;
    let telefonoReferenciaFamiliar = this.ObtenerFgValidador.telefonoReferenciaFamiliar.value;
    let nombreReferenciaPersonal = this.ObtenerFgValidador.nombreReferenciaPersonal.value;
    let telefonoReferenciaPersonal = this.ObtenerFgValidador.telefonoReferenciaPersonal.value;
    let clienteId = this.ObtenerFgValidador.clienteId.value;
    let tiempoTrabajoActual = this.ObtenerFgValidador.tiempoTrabajoActual.value;
    let modelo: InformacionFinancieraModelo = new InformacionFinancieraModelo();
    modelo.totalIngreso = parseInt(totalIngreso);
    modelo.telefonoTrabajo=telefonoTrabajo;
    modelo.cargo=cargo;
    modelo.nombreReferenciaFamiliar= nombreReferenciaFamiliar;
    modelo.telefonoReferenciaFamiliar=parseInt(telefonoReferenciaFamiliar);
    modelo.nombreReferenciaPersonal= nombreReferenciaPersonal;
    modelo.telefonoReferenciaPersonal= telefonoReferenciaPersonal;
    modelo.tiempoTrabajoActual= tiempoTrabajoActual;
    modelo.clienteId= parseInt(clienteId);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/clientes/listar-info-financiera"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }

}
