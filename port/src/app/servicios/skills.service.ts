import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private Url = 'http://localhost:8080/skills'

  constructor(private httpSkill:HttpClient) { }

  public lista():Observable<Skills[]>{
    return this.httpSkill.get<Skills[]>(this.Url + `/list`);
  }

  public verSkill(id: number): Observable<Skills>{
    return this.httpSkill.get<Skills>(this.Url + `/detail/${id}`);
  }
  
  public actualizarSkill(skill: Skills):Observable<any>{
   return this.httpSkill.post<any>(this.Url + `/create`, skill);
  }


  public editarSkill(id: number, skill:Skills):Observable <any>{
    return this.httpSkill.put<any>(this.Url + `/update/${id}`, skill);
  }

  public borrarSkill(id: number): Observable<any>{
    return this.httpSkill.delete<any>(this.Url + `/delete/${id}`);
  }

}
