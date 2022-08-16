import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { InicioService } from 'src/app/servicios/inicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  usuario: Usuario = new Usuario("", "", "")

  constructor(private usuarioServ:InicioService) { 
         
    }
    
    ngOnInit(): void {
      this.usuarioServ.traerUsuario().subscribe(data => {this.usuario = data})
    }

    /*public verUsuario():void{
      this.usuarioServ.traerUsuario().subscribe({
        next: (response: Usuario) =>{
        },
        error: (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }*/

    }
    
