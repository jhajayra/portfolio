import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills } from '../models/SoftSkills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  private Url = 'https://jami-backend.herokuapp.com/skillsSoft'

  constructor(private httpSoft: HttpClient) { }

  public lista():Observable<SoftSkills[]>{
    return this.httpSoft.get<SoftSkills[]>(this.Url + `/list`);
  }

  public verSoft(id: number): Observable<SoftSkills>{
    return this.httpSoft.get<SoftSkills>(this.Url + `/detail/${id}`);
  }

  public guardarSoft(skill: SoftSkills):Observable<any>{
    return this.httpSoft.post<any>(this.Url + `/create`, skill);
   }
 
 
   public editarSoft(id: number, skill:SoftSkills):Observable <any>{
     return this.httpSoft.put<any>(this.Url + `/update/${id}`, skill);
   }
 
   public borrarSoft(id: number): Observable<any>{
     return this.httpSoft.delete<any>(this.Url + `/delete/${id}`);
   }

}
