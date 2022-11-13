import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { InicioService } from 'src/app/servicios/inicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-inicio',
  templateUrl: './editar-inicio.component.html',
  styleUrls: ['./editar-inicio.component.css']
})
export class EditarInicioComponent implements OnInit {

  usuario :Usuario;

  constructor(private homeServ: InicioService,
    private activateRouter:ActivatedRoute,
    private ruta:Router) { }

  ngOnInit(): void {
    this.homeServ.traerUsuario().subscribe(
      data => {
        this.usuario = data;
      }, err =>{
        Swal.fire({
          title: 'Failed.',
          icon: 'error',
          width: 350,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
         this.ruta.navigate(['']);
      }
    
    )
  }

  actualizar():void {
    const id = this.activateRouter.snapshot.params['id'];
    this.homeServ.editarUsuario(this.usuario).subscribe(
      data => {
        Swal.fire({
          title: 'Updated User!',
          icon: 'success',
          width: 300,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          confirmButtonColor: 'rgb(69, 170, 69)',  
        });
         this.ruta.navigate(['']);
      }, err => {
        Swal.fire({
          title: 'Wrong Update.',
          icon: 'warning',
          width: 350,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.84)',
          showConfirmButton:false,
          timer: 2000
        });
        this.ruta.navigate(['']);
      }
    )
  }

}
