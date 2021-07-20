import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { InmuebleModelo } from 'src/app/modelos/inmueble.modelo';
import { BloqueService } from 'src/app/services/bloque.service';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaBloque: BloqueModelo[];

  constructor(private fb: FormBuilder,
    private servicioBloque: BloqueService,
    private servicio: InmuebleService,
    private router: Router) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.getAllBloques();
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      identificador: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      bloqueId:['',[Validators.required]],
      vendidos:['',[Validators.required]],
      solicitado:['',[Validators.required]]
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let identificador = this.ObtenerFgValidador.identificador.value;
    let valor = this.ObtenerFgValidador.valor.value;
    let bloqueId = this.ObtenerFgValidador.bloqueId.value;
    let vendidos = this.ObtenerFgValidador.vendidos.value;
    let solicitado = this.ObtenerFgValidador.solicitado.value;
    let modelo: InmuebleModelo = new InmuebleModelo();
    modelo.identificador = identificador;
    modelo.valor=parseInt(valor);
    modelo.bloqueId=parseInt(bloqueId);
    modelo.vendidos=parseInt(vendidos);
    modelo.solicitado=parseInt(solicitado);
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-inmueble"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }

  getAllBloques() {
    this.servicioBloque.ListarRegistros().subscribe(
      data => {
        this.ListaBloque = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading paises");
      }
    );
  }


}
