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
        this.expeServ.borrarExpe(idExp).subscribe(data => {
          this.cargarExperiencia();
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
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          showConfirmButton: false,
          timer: 1700
        });
      }

    }
    )
    
  }
}
