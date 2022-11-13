import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Librovisitas } from 'src/app/model/librovisitas';
import { LibrovisitasService } from 'src/app/service/librovisitas.service';
import * as AOS from 'aos';
import { ModalService } from 'src/app/service/modal.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-msjlibvis',
  templateUrl: './msjlibvis.component.html',
  styleUrls: ['./msjlibvis.component.css']
})
export class MsjlibvisComponent implements OnInit {

  nombreLV!: string;
  mensajeLV!: string;


  constructor(private libvisServ: LibrovisitasService, 
              private ruteador: Router,
              private modalServ:ModalService,
              private tokenService: TokenService ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken() == null) {
      this.ruteador.navigate(['iniciar-sesion']);
       }
      AOS.init();
    
  }

  crearMensaje(): void {
    const libroVis = new Librovisitas(this.nombreLV, this.mensajeLV);

    this.libvisServ.crearMensaje(libroVis).subscribe(
      data => {
        this.ruteador.navigate(['/librovisitas']);
      },
      err => {
        alert("Mensaje no enviado");
        this.ruteador.navigate(['/librovisitas']);
      }
    )  
    location.reload(); 
  }

    cerrarModal(){
      this.modalServ.$modal.emit(false);
      
    }

    
}
