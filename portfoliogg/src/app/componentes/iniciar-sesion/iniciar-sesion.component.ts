import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {
  form:FormGroup;

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  


  constructor(private tokenService: TokenService, private authService: AuthService, 
              private router: Router, private formBuilder:FormBuilder) {              

    this.form=this.formBuilder.group({        

      nombreUsuario:['', [Validators.required]],
      password:['', [Validators.required]]      
      }) 
    };

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    };

    AOS.init();
    
  }

  onLogin(): void {

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['paginauno'])
    }, err => {
      alert("Error en la autenticacion de usuario"); 
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;     
      console.log(this.errMsj);
      
    }
    )
  }

  get NombreUsuario(){
    return this.form.get('nombreUsuario');
  }

  get Password(){
    return this.form.get('password');
  }

  rellenarFormulario():any{
    
    this.form.patchValue({ nombreUsuario: 'Invitado', password: 'Invitado'});
      if(this.nombreUsuario=='Invitado'){
        document.getElementById('nombreUsuario')!.style.color='white';
        document.getElementById('password')!.style.color='white'; 
       };
    this.onLogin();
    
  };

mostrarInput():any{
  
  this.form.patchValue({ nombreUsuario: '', password: ''});
  document.getElementById('nombreUsuario')!.style.color='black';
  document.getElementById('password')!.style.color='black';

 } 
}


