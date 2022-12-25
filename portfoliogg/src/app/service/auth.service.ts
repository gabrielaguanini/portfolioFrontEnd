import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'https://backcloneportfolio-production.up.railway.app/authentication/';
  authURL = 'https://portfoliobackend-production-0d84.up.railway.app/authentication/';
  
  constructor(private httpClient: HttpClient) { 
    console.log('Servicio Autenticacion esta corriendo');    
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
