import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion = new Educacion ("", "", "")

  constructor(private eduServ:EducacionService) {  }

  ngOnInit(): void {
    this.eduServ.traerEducacion().subscribe(data => {this.educacion = data})

  }

}
