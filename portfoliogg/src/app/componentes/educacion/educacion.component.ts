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

  constructor(private tokenService: TokenService, private router: Router, private eduServ: EducacionService) { }

  ngOnInit(): void {

    this.cargarEducacion();

    if (this.tokenService.getToken() == null) {
      this.router.navigate(['iniciar-sesion']);
    }
  }

  cargarEducacion(): void {
    this.eduServ.listaEducacion().subscribe(data => { this.educacion = data })
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
