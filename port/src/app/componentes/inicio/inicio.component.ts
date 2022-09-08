import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { InicioService } from 'src/app/servicios/inicio.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  usuario: Usuario = new Usuario("", "", "")
  
  isLogged = false;
  
  constructor(private token: TokenService,  private usuarioServ:InicioService){}

  ngOnInit(): void {
    this.cargarUsuario();
    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

    cargarUsuario(){
      this.usuarioServ.traerUsuario().subscribe(data => {this.usuario = data});
    }



    }
    
