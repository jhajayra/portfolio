import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyeUrl = 'http://localhost:8080/projects'

  constructor(private httpProye: HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.httpProye.get<Proyectos[]>(this.proyeUrl + `/list`);
  }
}
