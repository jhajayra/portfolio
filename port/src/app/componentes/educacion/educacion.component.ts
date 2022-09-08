import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[]= [];  
  
  isLogged = false;

  constructor( private token:TokenService, private eduServ: EducacionService ) {  }


  ngOnInit(): void {
    this.cargarEducacion();
    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }

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
