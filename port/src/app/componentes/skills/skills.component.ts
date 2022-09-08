import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skills [] = [];
  
  isLogged = false;
  
  constructor(private skillsServ:SkillsService, private token:TokenService) {  }


  ngOnInit(): void {
    this.cargarSkills();
    if (this.token.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsServ.lista().subscribe( data=>{this.skills = data});
  }

  borrar(idSkill?: number){
    if (idSkill != undefined){
      this.skillsServ.borrarSkill(idSkill).subscribe(
        data => {
        this.cargarSkills();
      }, err => {
        alert("Error Deleting");
      }
      )
    }
  
  }
}
