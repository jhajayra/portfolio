import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proye:Proyectos[] = [];
  
  isLogged = false;
  
  constructor( private token:TokenService, private proyeServ: ProyectosService) { }
  

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.token.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
     
  }


  cargarProyectos(): void {
    this.proyeServ.lista().subscribe( data => {this.proye = data})
  }

  borrar(idProye?: number){
    if (idProye != undefined){
      this.proyeServ.borrarProye(idProye).subscribe(
        data => {
        this.cargarProyectos();
      }, err => {
        alert("Error Deleting");
      }
      )
    }
  }

  

}
