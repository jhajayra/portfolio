import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proye:Proyectos[] = [];
  
  isLogged = false;
  
  constructor( private token:TokenService, private proyeServ: ProyectosService) { }
  

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.token.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
     
  }


  cargarProyectos(): void {
    this.proyeServ.lista().subscribe( data => {this.proye = data})
  }

  borrar(idProye?: number){
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
      this.proyeServ.borrarProye(idProye).subscribe(
        data => {
        this.cargarProyectos();
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
