import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-lpp',
  templateUrl: './lpp.component.html',
  styleUrls: ['./lpp.component.css']
})
export class LppComponent implements OnInit {

  proyectoList: ProyectoModelo[];

  constructor(private service: ProyectoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.service.ListarRegistros().subscribe(
      data => { 
        this.proyectoList = data;
      },
      err => { }
    );
  }


  OpenDetails(codigo){
    this.router.navigate([`/detalles-producto/${codigo}`]);
  }

  }


