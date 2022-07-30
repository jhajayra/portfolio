import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  protected works:any;      

  constructor(private expeServ:ExperienciaService) {

      this.works= [ { where:'lugar', position: 'puesto1', description: 'desripciones de lo que hciste', from: 2012, to:2121, },
                    { where:'lugar2', position: 'puesto2', description: 'desripcfdciones de lo que hciste', from: 2052, to:2127, }
      ]

  }

  ngOnInit(): void {
  }

}
