import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {
  nombreEducacion!:string;
  fechaEducacion!:string;
  descripcionEducacion!:string;


  constructor(private tokenService: TokenService, 
              private eduServ:EducacionService, 
              private router:Router) { }



  ngOnInit(): void {
    if (this.tokenService.getToken() == null) {
      this.router.navigate(['iniciar-sesion']);
    }
  }
  

  onCreate():void{
    const educacion = new Educacion(this.nombreEducacion, this.fechaEducacion, this.descripcionEducacion);
    this.eduServ.crearEducacion(educacion).subscribe( data =>{ alert("Educacion agregada");
    this.router.navigate(['/paginauno']);
  }, err =>{alert("No se creó la educacion");
    this.router.navigate(["/paginauno"]);})
  }

}
