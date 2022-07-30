import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  protected projects:any;
  
  
  constructor( private projectServ:ProyectosService) {

    this.projects = [{titulo: 'primerproyecto', descripcion:'descrpcion del proyecto', anio: 2022}];
   
   }
  
  ngOnInit(): void {
     
  }

}
