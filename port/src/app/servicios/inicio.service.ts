import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private Url='https://jami-backend.herokuapp.com/user'

  constructor( private http: HttpClient) { }

  public traerUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.Url + `/detail/1`);

  }

  public editarUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(this.Url + `/update/1`, usuario);
  }

 

}
