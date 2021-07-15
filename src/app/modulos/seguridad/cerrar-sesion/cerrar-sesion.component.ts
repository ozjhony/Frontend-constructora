import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private servicio: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.servicio.RemoverLocalStorage();
    this.router.navigate(["/inicio"]);
  }

}
