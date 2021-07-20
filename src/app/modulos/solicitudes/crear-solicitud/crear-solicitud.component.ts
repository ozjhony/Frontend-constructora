import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudModelo } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  

  constructor(private fb: FormBuilder,
    private servicio: SolicitudService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      fechaSolicitud: ['', [Validators.required]],
      estadoSolicitud: ['', [Validators.required]],
      ofertaEconomica: ['', [Validators.required]],
      clienteId: ['', [Validators.required]],
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let fechaSolicitud = this.ObtenerFgValidador.fechaSolicitud.value;
    let estadoSolicitud = this.ObtenerFgValidador.estadoSolicitud.value;
    let ofertaEconomica = this.ObtenerFgValidador.ofertaEconomica.value;
    let clienteId = this.ObtenerFgValidador.clienteId.value;
    let modelo: SolicitudModelo = new SolicitudModelo();
    modelo.fechaSolicitud = fechaSolicitud;
    modelo.estadoSolicitud=estadoSolicitud;
    modelo.ofertaEconomica=ofertaEconomica;
    modelo.clienteId= parseInt(clienteId);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/solicitud/listar-solicitud"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }

  

}
