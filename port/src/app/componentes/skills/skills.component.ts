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

  skills : Skills [] = [];
  
  
  isLogged = false;
  
  constructor(private skillsServ:SkillsService, 
              private token:TokenService) {  }


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
    Swal.fire({
      title: 'Are You Sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      width: 400,
      padding: '1em',
      background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
      showCancelButton: true,
      confirmButtonColor: 'rgb(170, 5, 74)',
      cancelButtonColor: 'rgb(46, 1, 20)',
      confirmButtonText: 'Yes, Delete It!',
    }).then((result) => {
    if (idSkill != undefined){
      this.skillsServ.borrarSkill(idSkill).subscribe(
        data => {
        this.cargarSkills();
      }, err => {
        Swal.fire({
          title: 'Failed.',
          icon: 'error',
          width: 350,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
      }
      )
      Swal.fire({
        title: 'Deleted!',
        icon: 'success',
        width: 350,
        padding: '1em',
        background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
        showConfirmButton: false,
        timer: 1700
      })
      
    }
  })
  
}



 

}