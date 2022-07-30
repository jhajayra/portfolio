import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  protected softSkills:any;


  constructor(private skillsServ:SkillsService) {

    this.softSkills=['emotional inteligence', 'team work',
    'open minded', 'adaptability', 'emotional intelligence' ]

   }

  ngOnInit(): void {
  }

}
