import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paginados } from 'src/app/model/paginados';
import { PaginadosService } from 'src/app/service/paginados.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';



@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.css']
})
export class PaginadosComponent implements OnInit {
  paginados: Paginados[] = [];
  msjEsperandoLista = "";


  constructor(private pagdosServ: PaginadosService, 
              private tokenService: TokenService,
              private router:Router) { }

  ngOnInit(): void {

    this.mostrarExpLab();

  
    AOS.init();
  }



  mostrarExpLab(): void {
      // Mostrar mensaje de espera antes de hacer la llamada
      this.msjEsperandoLista = "Esperando datos del servidor. Por favor espera para visualizarlos.";
  
      // Hacer la solicitud al servidor 
      this.pagdosServ.listaexplab().subscribe(
          data => {
              // Actualizar los datos recibidos
              this.paginados = data;
  
              // Ocultar el mensaje de espera una vez que los datos se han cargado
              this.msjEsperandoLista = "";
          },
          error => {
              // En caso de error, puedes mostrar un mensaje alternativo
              this.msjEsperandoLista = "Ocurrió un error al cargar los datos. Por favor refresque la pagina.";
          }
      );
  }
  
  

  public borrarExpLab(id?: number) {
    this.pagdosServ.borrarExpLab(id).subscribe(
      data => {
        this.mostrarExpLab();
      },
      err => {
        alert("No se pudo eliminar");
      }
    )
  }
}


