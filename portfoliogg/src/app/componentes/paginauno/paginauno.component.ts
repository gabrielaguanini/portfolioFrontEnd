import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-paginauno',
  templateUrl: './paginauno.component.html',
  styleUrls: ['./paginauno.component.css']
})
export class PaginaunoComponent implements OnInit {
  proyectos:Proyectos[]= [];


  constructor(private tokenService: TokenService,
              private router: Router,
              private proyServ:ProyectosService) { }

  ngOnInit(): void {

    this.animacion_acercade();

    if (this.tokenService.getToken() == null) {
      this.router.navigate(['iniciar-sesion']);
    }

    AOS.init();
  }
  animacion_acercade() {
    document.getElementById('animacionacercade')?.animate([

      { transform: 'translateY(-600px)' },
      { transform: 'translateY(0px)' }
    ], {

      duration: 4000,

    })
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
