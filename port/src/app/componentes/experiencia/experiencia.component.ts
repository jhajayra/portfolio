import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia [] = [];    

  constructor(private expeServ:ExperienciaService) {

      
  }

  ngOnInit(): void {
    this.cargarExperiencia();

  
  }

  cargarExperiencia(): void{
    this.expeServ.lista().subscribe(data => {this.expe = data})
  } 

  borrar(id?: number){
    if (id != undefined){
      this.expeServ.borrarExpe(id).subscribe(
        data => {
        this.cargarExperiencia();
      }, err => {
        alert("Error Deleting");
      }
      )
    }
  }
}
