import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyectos[]= [];

  constructor(private tokenService: TokenService, private router: Router, private proyServ:ProyectosService) { }

  ngOnInit(): void {

    this.cargarProyecto();

    if (this.tokenService.getToken() == null) {
      this.router.navigate(['iniciar-sesion']);
       }

   
  }

  cargarProyecto():void{
    this.proyServ.lista().subscribe(data=> {this.proyectos = data})
  }

  borrarProyecto(id?: number){
    if(id!=undefined){
      this.proyServ.delete(id).subscribe(data=> {this.cargarProyecto();
      }, err =>{
        alert("No se elimino el proyecto");
      }
      )
    }
  }
}
