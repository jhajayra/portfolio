import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private Url='https://jami-backend.herokuapp.com/education'

  constructor(private http: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.Url + `/list`)
  }

  public verEdu(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.Url + `/detail/${id}`);
  }
  
  public guardarEdu(educacion: Educacion):Observable<any>{
   return this.http.post<any>(this.Url + `/create`, educacion);
  }


  public editarEdu(id: number, educacion:Educacion):Observable <any>{
    return this.http.put<any>(this.Url + `/update/${id}`, educacion);
  }

  public borrarEdu(id: number): Observable<any>{
    return this.http.delete<any>(this.Url + `/delete/${id}`);
  }
}
