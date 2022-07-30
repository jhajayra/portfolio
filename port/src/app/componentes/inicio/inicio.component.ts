import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/servicios/inicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  protected nombre : string;
  protected titulo : string;

  constructor(private homeServ:InicioComponent) { 
      this.nombre = 'jhajayra mori infantes';
      this.titulo = 'developer full stack jr';
           
    }
    
    ngOnInit(): void {
      
               
  }
    }
    
