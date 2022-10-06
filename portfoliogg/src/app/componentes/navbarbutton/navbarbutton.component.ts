import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbarbutton',
  templateUrl: './navbarbutton.component.html',
  styleUrls: ['./navbarbutton.component.css']
})
export class NavbarbuttonComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    
  }
  cerraSesion(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
