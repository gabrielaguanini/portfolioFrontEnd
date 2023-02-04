import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginados } from '../model/paginados';

@Injectable({
  providedIn: 'root'
})
export class PaginadosService {

  //expURL='https://backcloneportfolio-production.up.railway.app/explaboral/';
  expURL='https://backendportfoliogg.onrender.com/explaboral/';

  constructor(private httpClient:HttpClient) { }

  public listaexplab(): Observable<Paginados[]> {
    return this.httpClient.get<Paginados[]>(this.expURL + 'listaexplab');
  }

  public actualizarPorId(id: number): Observable<Paginados> {
    return this.httpClient.get<Paginados>(this.expURL + `buscarexplab/${id}`)
  }

  public crearExpLab(pagdos: Paginados): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'crearexplab', pagdos)
  }

  public editarExpLab(pagdos: Paginados): Observable<any> {
    return this.httpClient.put<Paginados>(this.expURL + 'editarexplab', pagdos)
  }

  public borrarExpLab(id?: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `borrarexplab/${id}`)
  }

}



