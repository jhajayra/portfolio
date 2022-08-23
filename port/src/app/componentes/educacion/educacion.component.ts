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
    this.cargarEducacion();

  }

    cargarEducacion():void{
      this.eduServ.lista().subscribe(
        data => {
          this.edu = data});
    } 

    borrarEdu(idEdu?: number){
      if (idEdu != undefined){
        this.eduServ.borrarEdu(idEdu).subscribe(
          data => {
            this.cargarEducacion();
          }, err => {
            alert("Wrong Deleting");
          }
        )
      }
    }

}
