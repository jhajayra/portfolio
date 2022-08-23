import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proye:Proyectos[] = [];
  
  
  constructor( private proyeServ:ProyectosService) { }
  
  ngOnInit(): void {
    this.cargarProyectos();
     
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
