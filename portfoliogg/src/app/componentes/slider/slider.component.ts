import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
   
    AOS.init();
  }

}
