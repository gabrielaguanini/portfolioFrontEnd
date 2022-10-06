import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paginados } from 'src/app/model/paginados';
import { PaginadosService } from 'src/app/service/paginados.service';
import { TokenService } from 'src/app/service/token.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-trabcrear',
  templateUrl: './trabcrear.component.html',
  styleUrls: ['./trabcrear.component.css']
})
export class TrabcrearComponent implements OnInit {

  nombreExp!: string;
  descripcionExp!: string;

  constructor(
    private pagdosServ: PaginadosService, 
    private tokenService: TokenService, 
    private ruteador: Router) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()==null){
      this.ruteador.navigate(['iniciar-sesion']);
    }

    AOS.init();
  }

  crearExpLab(){
    const paginados = new Paginados(this.nombreExp, this.descripcionExp);

    this.pagdosServ.crearExpLab(paginados).subscribe(
      data =>{
       this.ruteador.navigate(['/paginados']);
      },
      err =>{
        alert("No se pudo agregar experiencia");
        this.ruteador.navigate(['/paginados']);
      }
    )
  }

}
