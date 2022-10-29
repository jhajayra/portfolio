import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/models/SoftSkills';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-soft',
  templateUrl: './editar-soft.component.html',
  styleUrls: ['./editar-soft.component.css']
})
export class EditarSoftComponent implements OnInit {

  skillSoft : SoftSkills = null;

  constructor(private activateRoute: ActivatedRoute,
              private ruta : Router,
              private softServ: SoftSkillsService) { }

  ngOnInit(): void {
    const id =this.activateRoute.snapshot.params['id'];
    this.softServ.verSoft(id).subscribe(
      data => {
        this.skillSoft = data;
      }, err => {
        Swal.fire({
          title: 'Failed .',
          icon: 'error',
          width: 350,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });        this.ruta.navigate(['']);
      }
    )
  }

  actualizar():void {
    const id = this.activateRoute.snapshot.params['id'];
    this.softServ.editarSoft(id,this.skillSoft).subscribe(
      data => {
        Swal.fire({
          title: 'Updated Skill!',
          icon: 'success',
          width: 300,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/skills']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'error',
          width: 350,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        }); 
        this.ruta.navigate(['/skills']);
      }
    )
  }
}
