import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyeUrl = 'https://jami-backend.herokuapp.com/projects'

  constructor(private httpProye: HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.httpProye.get<Proyectos[]>(this.proyeUrl + `/list`);
  }

  public verProye(id: number): Observable<Proyectos>{
    return this.httpProye.get<Proyectos>(this.proyeUrl + `/detail/${id}`);
  }
  
  public guardarProye(proyecto: Proyectos):Observable<any>{
   return this.httpProye.post<any>(this.proyeUrl + `/create`, proyecto);
  }


  public actualizarProye(id: number, proyecto: Proyectos):Observable <any>{
    return this.httpProye.put<any>(this.proyeUrl + `/update/${id}`, proyecto);
  }

  public borrarProye(id: number): Observable<any>{
    return this.httpProye.delete<any>(this.proyeUrl + `/delete/${id}`);
  }
}
