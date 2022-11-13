import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { NuevoUsuario } from '../model/nuevo-usuario';


@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {
  nuserURL = 'http://localhost:8080/authentication/';

  constructor(private httpClient: HttpClient) { }

  public nuevoUsu(nuevoUsuario: NuevoUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.nuserURL + 'nuevo', nuevoUsuario)
  }
}
