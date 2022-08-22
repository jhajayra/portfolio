import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skills [] = [];
 
  constructor(private skillsServ:SkillsService) {  }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(): void {
    this.skillsServ.lista().subscribe( data=>{this.skills = data});
  }

  borrar(id?: number){
    if (id != undefined){
      this.skillsServ.borrarSkill(id).subscribe(
        data => {
        this.cargarSkills();
      }, err => {
        alert("Error Deleting");
      }
      )
    }
  
  }
}
