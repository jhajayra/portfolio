import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

    protected estudios:any;

  constructor() { 

      this.estudios = [ {titulo:'Developer', lugar:'argetina programa', anio: 2022, finalizado: true },
                          {titulo:'graphic designer', lugar:'iccer', anio: 2014, finalizado: true},
                          {titulo:'Mobile app development', lugar:'aprende programando', anio :2022, finalizado:true}

      ]
  }

  ngOnInit(): void {
  }

}
