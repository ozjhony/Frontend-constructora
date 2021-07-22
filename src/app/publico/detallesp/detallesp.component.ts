import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoModelo } from 'src/app/modelos/proyecto.modelo';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-detallesp',
  templateUrl: './detallesp.component.html',
  styleUrls: ['./detallesp.component.css']
})
export class DetallespComponent implements OnInit {

  
  codigo: number;
  p: ProyectoModelo;

  constructor(private route: ActivatedRoute,
    private service: ProyectoService,
    private router: Router) {
   // this.codigo = this.route.snapshot.params["codigo"];
  }

  ngOnInit(): void {
    
    let codigo = this.route.snapshot.params["codigo"];
    this.getDataOfProyecto(codigo);
  }

  getDataOfProyecto(codigo:number) {
    this.service.BuscarRegistro(codigo).subscribe(
      data => {
        this.p = data;
        this.codigo = data.codigo;
        console.log(this.p )
       },
       err => {

      }
    );
  }

  Volver(){
    this.router.navigate([`/inicio`]);
  }

}
