import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloqueModelo } from 'src/app/modelos/bloque.modelo';
import { InmuebleModelo } from 'src/app/modelos/inmueble.modelo';
import { BloqueService } from 'src/app/services/bloque.service';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});
  ListaBloque: BloqueModelo[];

  constructor(private fb: FormBuilder,
    private servicio: InmuebleService,
    private router: Router,
    private route: ActivatedRoute,
    private servicioBloque:BloqueService) {
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      bloqueId: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      identificador: ['', [Validators.required]],
      
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
        this.ObtenerFgValidador.valor.setValue(datos.valor);
        this.ObtenerFgValidador.bloqueId.setValue(datos.bloqueId);
        this.ObtenerFgValidador.codigo.setValue(datos.codigo);
        this.ObtenerFgValidador.identificador.setValue(datos.identificador);
      
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
    this.servicioBloque.ListarRegistros().subscribe(
      data => {
        this.ListaBloque = data;
        //setTimeout(initSelect(), 500);
      },
      error => {
        console.error("Error loading categories");
      }
    );
  }

  ModificarRegistro() {
    let valor = this.ObtenerFgValidador.valor.value;
    let bloqueId = this.ObtenerFgValidador.bloqueId.value;
    let codigo = this.ObtenerFgValidador.codigo.value;
    let identificador = this.ObtenerFgValidador.identificador.value;
    let modelo: InmuebleModelo = new InmuebleModelo();
    modelo.valor = parseInt(valor);
    modelo.bloqueId=parseInt(bloqueId);
    modelo.codigo=codigo;
    modelo.identificador = identificador;

   
    console.log(modelo.valor);

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
