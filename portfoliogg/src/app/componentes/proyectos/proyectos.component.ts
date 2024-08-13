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
  msjEsperandoLista = "";

  constructor(private tokenService: TokenService, private router: Router, private proyServ:ProyectosService) { }

  ngOnInit(): void {

    this.cargarProyecto();
   
  }


  cargarProyecto(): void {
      // Mostrar mensaje de espera antes de hacer la llamada
      this.msjEsperandoLista = "Esperando datos del servidor. Por favor espera para visualizarlos.";
  
      // Hacer la solicitud al servidor 
      this.proyServ.lista().subscribe(
          data => {
              // Actualizar los datos recibidos
              this.proyectos = data
  
              // Ocultar el mensaje de espera una vez que los datos se han cargado
              this.msjEsperandoLista = "";
          },
          error => {
              // En caso de error, puedes mostrar un mensaje alternativo
              this.msjEsperandoLista = "Ocurrió un error al cargar los datos. Por favor refresque la pagina.";
          }
      );
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
