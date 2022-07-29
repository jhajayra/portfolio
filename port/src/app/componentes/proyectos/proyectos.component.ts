import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  protected proyectos:any;
  
  
  constructor() {

    this.proyectos = [{titulo: 'primerproyecto',
                     descripcion:'descrpcion del proyecto',
                    anio: 2022}];
   

   }
  
  ngOnInit(): void {
     
  }

}
