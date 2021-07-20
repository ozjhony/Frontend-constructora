import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModelo } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicio: SolicitudService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      clienteId: ['', [Validators.required]],
      fechaSolicitud: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      estadoSolicitud: ['', [Validators.required]],
      ofertaEconomica: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    let codigo = this.route.snapshot.params["codigo"];
    this.ObtenerRegistroPorCodigo(codigo);
  }

  ObtenerRegistroPorCodigo(codigo: number) {
    this.servicio.BuscarRegistro(codigo).subscribe(
      (datos) => {
        console.log(datos);
        this.ObtenerFgValidador.fechaSolicitud.setValue(datos.fechaSolicitud);
        this.ObtenerFgValidador.clienteId.setValue(datos.clienteId);
        this.ObtenerFgValidador.codigo.setValue(datos.codigo);
        this.ObtenerFgValidador.estadoSolicitud.setValue(datos.estadoSolicitud);
        this.ObtenerFgValidador.ofertaEconomica.setValue(datos.ofertaEconomica);
      },
      (err) => {
        alert("No se encuentra el registro con codigo " + codigo);
      }
    );
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }



  ModificarRegistro() {
    let fechaSolicitud = this.ObtenerFgValidador.fechaSolicitud.value;
    let clienteId = this.ObtenerFgValidador.clienteId.value;
    let codigo = this.ObtenerFgValidador.codigo.value;

    let estadoSolicitud = this.ObtenerFgValidador.estadoSolicitud.value;
    let ofertaEconomica = this.ObtenerFgValidador.ofertaEconomica.value;
    let modelo: SolicitudModelo = new SolicitudModelo();
    modelo.fechaSolicitud = fechaSolicitud;
    modelo.clienteId=parseInt(clienteId);
    modelo.codigo=codigo;
    modelo.estadoSolicitud=estadoSolicitud;
    modelo.ofertaEconomica=ofertaEconomica;

    

    console.log(modelo.clienteId);
    console.log(modelo.fechaSolicitud);

    this.servicio.ModificarRegistro(modelo).subscribe(
      (datos) => {
        alert("Registro modificado correctamente.");
        this.router.navigate(["/solicitud/listar-solicitud"]);
      },
      (err) => {
        alert("Error modificando el registro");
      }
    );
  }

}
