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

  constructor(private tokenService: TokenService, 
              private router: Router, 
              private habServ:HabilidadesService) { }

  ngOnInit(): void {

    this.cargarhabilidad()

    if (this.tokenService.getToken() == null) {
      this.router.navigate(['iniciar-sesion']);
       }
  }

  cargarhabilidad():void{
    this.habServ.lista().subscribe(data=> {this.habilidades = data})
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
