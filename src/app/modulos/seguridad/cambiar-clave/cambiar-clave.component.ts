import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogModelo } from 'src/app/modelos/userlog.modelo';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  /* fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicio: SeguridadService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ConstruirFormulario();
    let id = this.route.snapshot.params["id"];
    this.ObtenerRegistroPorCodigo(id);
  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      clave: ['', [Validators.required], [Validators.minLength(5)]],
      id: ['', [Validators.required]]
    });
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  ObtenerRegistroPorCodigo(id: String) {
    this.servicio.BuscarRegistro(id).subscribe(
      (datos) => {
        console.log(datos);
        this.ObtenerFgValidador.clave.setValue(datos.clave);
        this.ObtenerFgValidador.id.setValue(datos.id);
     
      },
      (err) => {
        alert("No se encuentra el registro con id " + id);
      }
    );
  }

  ModificarRegistro() {
    let clave = this.ObtenerFgValidador.clave.value;
    let id = this.ObtenerFgValidador.id.value;
    let modelo: UserLogModelo = new UserLogModelo();
    modelo.clave = clave;
    modelo.id=id;
    console.log(modelo.id)
    this.servicio.ModificarRegistro(modelo).subscribe(
      (datos) => {
        alert("Registro modificado correctamente.");
        this.router.navigate(["/inicio"]);
      },
      (err) => {
        alert("Error modificando el registro");
      }
    );

} */

}
