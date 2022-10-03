import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia [] = [];    

  isLogged = false;
  
  constructor(private token: TokenService,  private expeServ:ExperienciaService){}

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.expeServ.lista().subscribe(data => {this.expe = data})
  }


  borrar(idExp?: number){
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
      if (idExp != undefined) {
        this.expeServ.borrarExpe(idExp).subscribe(
          data => {
          this.cargarExperiencia();
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
