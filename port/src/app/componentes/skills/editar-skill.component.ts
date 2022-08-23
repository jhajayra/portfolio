import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  skill: Skills = null;

  constructor(private skillServ: SkillsService,
              private activateRoute: ActivatedRoute,
              private ruta : Router) { }

  ngOnInit(): void {
    const id =this.activateRoute.snapshot.params['id'];
    this.skillServ.verSkill(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Failed ");
        this.ruta.navigate(['']);
      }
    )
  }

  actualizar():void {
    const id = this.activateRoute.snapshot.params['id'];
    this.skillServ.editarSkill(id,this.skill).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err => {
        alert("Failed");
        this.ruta.navigate(['']);
      }
    )
  }

}
