import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/Skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  skill: Skills = null;

  constructor(private skillServ: SkillsService,
    private activateRoute: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.skillServ.verSkill(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        Swal.fire({
          title: 'Failed.',
          icon: 'error',
          width: 350,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['']);
      }
    )
  }

  actualizar(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.skillServ.editarSkill(id, this.skill).subscribe(
      data => {
        Swal.fire({
          title: 'Updated Skill!',
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
