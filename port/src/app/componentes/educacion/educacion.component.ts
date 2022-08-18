import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[]= [];  

  constructor(private eduServ:EducacionService) {  }

  ngOnInit(): void {
    this.cargarEeducacion();

  }
cargarEeducacion():void{
    this.eduServ.traerListaEdu().subscribe(data => {this.edu = data});
  } 

}
