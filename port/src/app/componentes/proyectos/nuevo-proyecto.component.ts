import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombreProye: string = "";
  descriProye: string = "";
  anioProye: number;

  constructor(private nuevoServ: ProyectosService, private ruta: Router) { }

  ngOnInit(): void {

  }

  crear(): void {
    const proye = new Proyectos(this.nombreProye, this.descriProye, this.anioProye);
    this.nuevoServ.guardarProye(proye).subscribe(
      data=>{
        Swal.fire({
          title: 'Added Project!',
          icon: 'success',
          width: 300,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          confirmButtonColor: 'rgb(69, 170, 69)'
                });
        this.ruta.navigate(['/projects']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'warning',
          width: 350,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.84)',
          showConfirmButton:false,
          timer: 2000
        });
        this.ruta.navigate(['/projects']);
      }
    )
  }

}