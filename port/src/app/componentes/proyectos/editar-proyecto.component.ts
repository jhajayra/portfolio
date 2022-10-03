import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proye: Proyectos = null;
  
  constructor(private proyeServ:ProyectosService,
    private activateRouter:ActivatedRoute,
    private ruta:Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyeServ.verProye(id).subscribe(
      data => {
        this.proye = data;
      }, err =>{
        Swal.fire({
          title: 'Failed.',
          icon: 'error',
          width: 350,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });        this.ruta.navigate(['']);
      }
    )
  }
  actualizar():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.proyeServ.actualizarProye(id,this.proye).subscribe(
      data => {
        Swal.fire({
          title: 'Updated Project!',
          icon: 'success',
          width: 300,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/projects']);
      }, err =>{
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'error',
          width: 350,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });      
         this.ruta.navigate(['/projects']);
      }
    )
  }

}
