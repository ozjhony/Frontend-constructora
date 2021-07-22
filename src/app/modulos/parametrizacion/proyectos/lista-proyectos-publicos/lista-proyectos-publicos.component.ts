import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-lista-proyectos-publicos',
  templateUrl: './lista-proyectos-publicos.component.html',
  styleUrls: ['./lista-proyectos-publicos.component.css']
})
export class ListaProyectosPublicosComponent implements OnInit {
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


  OpenDetails(id){
    this.router.navigate([`/parametros/lista-proyectos`]);
  }

}
