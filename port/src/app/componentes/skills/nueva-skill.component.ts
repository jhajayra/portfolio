import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/Skills';
import { SoftSkills } from 'src/app/models/SoftSkills';
import { SkillsService } from 'src/app/servicios/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {

  nombreSkill: string;
  porcentaje: number;

  constructor(private skillServ: SkillsService,
    private ruta: Router) { }

  ngOnInit(): void {
  }

  crearSkill(): void {
    const skill = new Skills(this.nombreSkill, this.porcentaje);
    this.skillServ.guardarSkill(skill).subscribe(
      data => {
        Swal.fire({
          title: 'Added Skill!',
          icon: 'success',
          width: 300,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          confirmButtonColor: 'rgb(69, 170, 69)'
        });
        this.ruta.navigate(['/skills']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'warning',
          width: 350,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.84)',
          showConfirmButton: false,
          timer: 2000
        });
        this.ruta.navigate(['/skills']);
      }
    )
  }


}
