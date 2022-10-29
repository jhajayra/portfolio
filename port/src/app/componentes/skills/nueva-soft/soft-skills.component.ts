import { Component, OnInit } from '@angular/core';
import { SoftSkills } from 'src/app/models/SoftSkills';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  softList : SoftSkills[] = [];

  isLogged = false;

  constructor(private softServ: SoftSkillsService, private token:TokenService) { }

  ngOnInit(): void {
    this.cargarSoft();
    if (this.token.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSoft(): void {
    this.softServ.lista().subscribe( data=>{this.softList = data});
  }

  borrar(idSoft?: number){
      Swal.fire({
        title: 'Are You Sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        width: 350,
        padding: '1em',
        showCancelButton: true,
        confirmButtonColor: 'rgb(170, 5, 74)',
        cancelButtonColor: 'rgb(46, 1, 20)',
        confirmButtonText: 'Yes, Delete It!',
      }).then((result) => {
      if (result.isConfirmed){
        this.softServ.borrarSoft(idSoft).subscribe(
          data => {
          this.cargarSoft();
          Swal.fire({
            title: 'Deleted!',
            icon: 'success',
            width: 350,
            padding: '1em',
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
          timer: 1700
        });
      }

    }
    )
    
  }
}
