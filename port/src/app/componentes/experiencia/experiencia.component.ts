import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia [] = [];    

  isLogged = false;
  
  constructor(private token: TokenService,  private expeServ:ExperienciaService){}

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }
  
 

  cargarExperiencia(): void{
    this.expeServ.lista().subscribe(data => {this.expe = data})
  }


  borrar(idExp?: number){
    if (idExp != undefined){
      this.expeServ.borrarExpe(idExp).subscribe(
        data => {
        this.cargarExperiencia();
      }, err => {
        alert("Error Deleting");
      }
      )
    }
  }
}
