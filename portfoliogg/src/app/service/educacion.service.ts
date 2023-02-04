import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Librovisitas } from '../model/librovisitas';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //URL = 'https://backcloneportfolio-production.up.railway.app/educacion/';
  URL = 'https://backendportfoliogg.onrender.com/educacion/';

  constructor(private httpClient: HttpClient) { }


  public listaEducacion(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + 'listaeducacion');
  }

  public actualizarPorId(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `actualizarporid/${id}`)
  }

  public crearEducacion(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'creareducacion', educacion)
  }

  public editarEducacion(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `actualizareducacion/${id}`, educacion)
  }

  public borrarEducacion(id?: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrareducacion/${id}`)
  }

}
