import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://portfoliobackend-production-fc6a.up.railway.app/authentication/';
  //authURL = 'https://backendportfoliogg.onrender.com/authentication/';
  
  constructor(private httpClient: HttpClient) { 
    console.log('Servicio Autenticacion esta corriendo');    
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
