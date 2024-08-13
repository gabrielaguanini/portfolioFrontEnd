import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidadescrud',
  templateUrl: './habilidadescrud.component.html',
  styleUrls: ['./habilidadescrud.component.css']
})
export class HabilidadescrudComponent implements OnInit {

  habilidades:Habilidades[]= [];
  msjEsperandoLista = "";

  constructor(private tokenService: TokenService, 
              private router: Router, 
              private habServ:HabilidadesService) { }

  ngOnInit(): void {

    this.cargarhabilidad()

    
  }



 
  cargarhabilidad(): void {
      // Mostrar mensaje de espera antes de hacer la llamada
      this.msjEsperandoLista = "Esperando datos del servidor. Por favor espera para visualizarlos.";
  
      // Hacer la solicitud al servidor sin depender
      this.habServ.lista().subscribe(
          data => {
              // Actualizar los datos recibidos
              this.habilidades = data;
  
              // Ocultar el mensaje de espera una vez que los datos se han cargado
              this.msjEsperandoLista = "";
          },
          error => {
              // En caso de error, puedes mostrar un mensaje alternativo
              this.msjEsperandoLista = "Ocurrió un error al cargar los datos. Por favor refresque la pagina.";
          }
      );
  }


  borrarHabilidad(id?: number){
    if(id!=undefined){
      this.habServ.delete(id).subscribe(data=> {this.cargarhabilidad();
      }, err =>{
        alert("No se elimino la habilidad");
      }
      )
    }
  }

}
