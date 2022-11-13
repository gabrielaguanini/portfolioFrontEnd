import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {
  nombreProyecto!:string;
  descripcionProyecto!:string;
  
  constructor(private proyServ:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyectos = new Proyectos(this.nombreProyecto, this.descripcionProyecto);
    this.proyServ.save(proyectos).subscribe( data =>{ alert("Proyecto agregado");
    this.router.navigate(['/paginauno']);
  }, err =>{alert("No se creó el proyecto");
    this.router.navigate(["/paginauno"]);})
  }

}
