import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private eduServ: EducacionService,
    private activateRoute: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.eduServ.verEdu(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        Swal.fire({
          title: 'Failed.',
          icon: 'error',
          width: 350,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          confirmButtonColor: 'rgb(69, 170, 69)'
        });
        this.ruta.navigate(['']);
      }
    )
  }

  actualizar(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.eduServ.editarEdu(id, this.educacion).subscribe(
      data => {
        Swal.fire({
          title: 'Updated Education!',
          icon: 'success',
          width: 300,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          confirmButtonColor: 'rgb(69, 170, 69)',
        });
        this.ruta.navigate(['/education']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'warning',
          width: 350,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.84)',
          showConfirmButton: false,
          timer: 2000
        });
        this.ruta.navigate(['/education']);
      }
    )
  }

}
