import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  protected softSkills:any;
  protected skillsFront:any;
  protected skillsBack:any;
  protected listIdioma:any;


  constructor(private skillsServ:SkillsService) {

    this.softSkills=['emotional inteligence', 'team work',
    'open minded', 'adaptability', 'emotional intelligence' ];

    this.skillsFront=[  {lenguaje:'html', porcentaje:50},
                        {lenguaje:'css', porcentaje:50} ];
    
    this.skillsBack=[ {lenguaje:'java', porcentaje:20},
                      {lenguaje:'html', porcentaje:50},
                      {lenguaje:'html', porcentaje:50},
                      {lenguaje:'html', porcentaje:50},
                      {lenguaje:'html', porcentaje:50},
                      {lenguaje:'html', porcentaje:50},
                      {lenguaje:'mysql', porcentaje:20} ];

                  
    this.listIdioma=[ {idioma:'ingles', nivel:'avanzado'},
    {idioma:'ingles', nivel:'avanzado'},
    {idioma:'ingles', nivel:'avanzado'}, {idioma:'ingles', nivel:'avanzado'},
    ]

   }

  ngOnInit(): void {
  }

}
