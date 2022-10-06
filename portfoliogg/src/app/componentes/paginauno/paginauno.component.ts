import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-paginauno',
  templateUrl: './paginauno.component.html',
  styleUrls: ['./paginauno.component.css']
})
export class PaginaunoComponent implements OnInit {


  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {

    this.animacion_acercade();

    if (this.tokenService.getToken() == null) {
      this.router.navigate(['iniciar-sesion']);
    }

    AOS.init();
  }
  animacion_acercade() {
    document.getElementById('animacionacercade')?.animate([

      { transform: 'translateY(-600px)' },
      { transform: 'translateY(0px)' }
    ], {

      duration: 4000,

    })
  }
}
