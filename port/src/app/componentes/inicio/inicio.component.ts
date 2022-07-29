import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  protected nombre : string;
  protected titulo : string;

  constructor() { 
      this.nombre = 'jhajayra mori infantes';
      this.titulo = 'developer full stack jr';
           
    }
    
    ngOnInit(): void {
      
               
  }
    }
    
