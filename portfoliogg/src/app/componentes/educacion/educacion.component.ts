import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  msjEsperandoLista = "";

  constructor(private tokenService: TokenService, private router: Router, private eduServ: EducacionService) { }

  ngOnInit(): void {

    this.cargarEducacion();

  
  }

  cargarEducacion(): void {
    // Mostrar mensaje de espera antes de hacer la llamada
    this.msjEsperandoLista = "Esperando datos del servidor. Por favor espera para visualizarlos.";

    // Hacer la solicitud al servidor sin depender del tamaño de this.educacion
    this.eduServ.listaEducacion().subscribe(
        data => {
            // Actualizar los datos recibidos
            this.educacion = data;

            // Ocultar el mensaje de espera una vez que los datos se han cargado
            this.msjEsperandoLista = "";
        },
        error => {
            // En caso de error, puedes mostrar un mensaje alternativo
            this.msjEsperandoLista = "Ocurrió un error al cargar los datos. Por favor intenta nuevamente.";
        }
    );
}


  borrarEducacion(id?: number) {
    if (id != undefined) {
      this.eduServ.borrarEducacion(id).subscribe(data => {
        this.cargarEducacion();
      }, err => {
        alert("No se elimino");
      }
      )
    }
  }
}
