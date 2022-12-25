import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Librovisitas } from '../model/librovisitas';

@Injectable({
  providedIn: 'root'
})
export class LibrovisitasService {

  //lvURL = 'https://backcloneportfolio-production.up.railway.app/librovisitas/';
    lvURL = 'https://portfoliobackend-production-0d84.up.railway.app/librovisitas/';

  constructor(private httpClient: HttpClient) { }

  public listaLibVis(): Observable<Librovisitas[]> {
    return this.httpClient.get<Librovisitas[]>(this.lvURL + 'listalibvis');
  }

  public actualizarPorId(id: number): Observable<Librovisitas> {
    return this.httpClient.get<Librovisitas>(this.lvURL + `actualizarporid/${id}`)
  }

  public crearMensaje(libVis: Librovisitas): Observable<any> {
    return this.httpClient.post<any>(this.lvURL + 'crearmensaje', libVis)
  }

  public editarLV(id: number, libVis: Librovisitas): Observable<any> {
    return this.httpClient.put<any>(this.lvURL + `actualizarlibrovis/${id}`, libVis)
  }

  public borrarLibVis(id?: number): Observable<any> {
    return this.httpClient.delete<any>(this.lvURL + `borrarlibvis/${id}`)
  }
}
