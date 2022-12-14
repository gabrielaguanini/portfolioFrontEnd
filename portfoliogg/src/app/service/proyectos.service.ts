import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  //URL = 'https://backcloneportfolio-production.up.railway.app/proyectos/';
  URL = 'https://portfoliobackend-production-0d84.up.railway.app/proyectos/';

   

  constructor(private httpClient:HttpClient) { }



  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'listaproyectos');
  }


  public detail(id:number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public save(proyectos:Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crearproyecto', proyectos);
  }

  public update(id:number, proyectos:Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `actualizarproyecto/${id}`, proyectos);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrarproyecto/${id}`);
  }
}
