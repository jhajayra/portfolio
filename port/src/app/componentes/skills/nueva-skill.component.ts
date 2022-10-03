import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Added Skill!',
          icon: 'success',
          width: 300,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
         this.ruta.navigate(['/skills']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'error',
          width: 350,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
         this.ruta.navigate(['/skills']);
      }
    )
  }

}
