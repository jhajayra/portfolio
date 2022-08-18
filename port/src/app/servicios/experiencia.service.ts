import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private expeUrl = 'http://localhost:8080/experience'

  constructor(private httpExpe: HttpClient) { }

  public lista (): Observable<Experiencia[]>{
    return this.httpExpe.get<Experiencia[]>(this.expeUrl + `/list`);
  }

  public verExpe(id: number): Observable<Experiencia>{
    return this.httpExpe.get<Experiencia>(this.expeUrl + `/detail/id/{id}`);
  }

  public guardarExpe(experiencia: Experiencia):Observable<any>{
    return this.httpExpe.post<any>(this.expeUrl + `/create`, experiencia);
  }

  public actualizarExpe(id: number, experiencia : Experiencia): Observable<any>{
     return this.httpExpe.put<any>(this.expeUrl + `/update/id/${id}`, experiencia);
  }

  public borrarExpe(id: number): Observable<any>{
    return this.httpExpe.delete<any>(this.expeUrl + `/delete/id/${id}`);
  }

}
