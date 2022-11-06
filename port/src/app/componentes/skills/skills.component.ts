import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/Skills';
import { SoftSkills } from 'src/app/models/SoftSkills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];


  isLogged = false;

  constructor(private skillsServ: SkillsService,
    private token: TokenService) { }


  ngOnInit(): void {
    this.cargarSkills();
    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsServ.lista().subscribe(data => { this.skills = data });
  }

  borrar(idSkill?: number) {
    Swal.fire({
      title: 'Are You Sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      width: 350,
      padding: '1em',
      color: '#fff',
      background: 'rgb(1, 1, 1, 0.8)',
      showCancelButton: true,
      confirmButtonColor: 'rgb(190, 41, 116)',
      cancelButtonColor: 'rgb(150, 84, 116',
      confirmButtonText: 'Yes, Delete It!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.skillsServ.borrarSkill(idSkill).subscribe(
          data => {
            this.cargarSkills();
            Swal.fire({
              title: 'Deleted!',
              icon: 'success',
              width: 350,
              padding: '1em',
              color: '#fff',
              background: 'rgb(1, 1, 1, 0.8)',
              showConfirmButton: false,
              timer: 1700
            });
          })
      } else {
        Swal.fire({
          title: 'Cancelled!',
          icon: 'error',
          width: 350,
          padding: '1em',
          showConfirmButton: false,
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          timer: 1700
        });
      }

    }
    )

  }
}
