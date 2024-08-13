import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Educacion } from 'src/app/model/educacion';
import { Habilidades } from 'src/app/model/habilidades';
import { Paginados } from 'src/app/model/paginados';
import { Proyectos } from 'src/app/model/proyectos';
import { EducacionService } from 'src/app/service/educacion.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { PaginadosService } from 'src/app/service/paginados.service';
import { ProyectosService } from 'src/app/service/proyectos.service';




@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit, OnDestroy {

interval:any;

listaEducacion: Educacion[] = [];
listaHabilidades: Habilidades[] = [];
listaProyectos: Proyectos[] = [];
listaPaginaDos: Paginados[] = [];


  constructor(private ruta: Router, 
              private educServ: EducacionService, 
              private habilServ: HabilidadesService, 
              private proyServ: ProyectosService, 
              private pagDosServ: PaginadosService) {    

  }
  

  ngOnInit(): void {

    this.listaEduc();
    this.listaProy();
    this.listaHab();   
    this.listaPagDos();

     let reemplazoThis=this;
     this.interval = setInterval(function() {
      reemplazoThis.navegar();
  }, 5000);

     AOS.init();

    
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  listaEduc(): void {
    this.educServ.listaEducacion().subscribe(
      data => {
        this.listaEducacion = data;
      }
    )
  };

  listaHab(): void {
    this.habilServ.lista().subscribe(
      data => {
        this.listaHabilidades = data;
      }
    )
  };

  listaProy(): void {
    this.proyServ.lista().subscribe(
      data => {
        this.listaProyectos = data;
      }
    )
  };

  listaPagDos(): void {
    this.pagDosServ.listaexplab().subscribe(
      data => {
        this.listaPaginaDos = data;
      }
    )
  };
 
 
  navegar(): void {    
    this.ruta.navigate(['/iniciar-sesion']);
   }

}




