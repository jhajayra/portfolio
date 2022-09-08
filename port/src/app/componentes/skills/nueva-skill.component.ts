import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {

  nombreSkill:string;
  porcentaje:number;

  constructor(private skillServ: SkillsService, private ruta:Router) { }

  ngOnInit(): void {
  }

  crearSkill(): void{
    const skill =new Skills (this.nombreSkill, this.porcentaje);
    this.skillServ.actualizarSkill(skill).subscribe(
      data => {
        alert("Skill Saved");
        this.ruta.navigate(['']);
      }, err => {
        alert("Failed, Check Your Information");
        this.ruta.navigate(['']);
      }
    )
  }

}
