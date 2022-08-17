import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private Url='http://localhost:8080/education'

  constructor(private http: HttpClient) { }

  public traerListaEdu(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.Url + `/list`)
  }
  

  public editarEducacion(edu:Educacion):Observable <Educacion>{
    return this.http.put<Educacion>(this.Url + `/update/id/{id}`, edu)
  }

  //public borrarEducacion(idEdu: )
}
