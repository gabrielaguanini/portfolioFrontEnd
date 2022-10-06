import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezadosinanim',
  templateUrl: './encabezadosinanim.component.html',
  styleUrls: ['./encabezadosinanim.component.css']
})
export class EncabezadosinanimComponent implements OnInit {

  constructor(private tokenService:TokenService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()==null){
      this.router.navigate(['iniciar-sesion']);
    }
  }

  cerraSesion(): void {
    this.tokenService.logOut();
    window.location.reload();
  }


}
