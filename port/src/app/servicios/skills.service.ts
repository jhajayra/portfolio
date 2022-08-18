import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skillUrl = 'http://localhost:8080/skills'

  constructor(private httpSkill:HttpClient) { }

  public lista():Observable<Skills[]>{
    return this.httpSkill.get<Skills[]>(this.skillUrl + `/list`);
  }

}
