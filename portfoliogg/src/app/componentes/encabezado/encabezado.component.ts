import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

botonAbrir!:boolean;

  constructor(private tokenService: TokenService,
              private router:Router) { }

  ngOnInit(): void {
     


    AOS.init();

  }

  cerraSesion(): void {
    this.tokenService.logOut();
    window.location.reload();
  }



}
