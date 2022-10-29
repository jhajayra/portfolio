import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  expeLabo: Experiencia = null;

  constructor(private experiencia: ExperienciaService,
    private activateRouter: ActivatedRoute,
    private ruta: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.experiencia.verExpe(id).subscribe(
      data => {
        this.expeLabo = data;
      }, err => {
        Swal.fire({
          title: 'Failed.',
          icon: 'error',
          width: 350,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['']);
      })
  }

  actualizar(): void {
    const id = this.activateRouter.snapshot.params['id'];

    this.experiencia.actualizarExpe(id, this.expeLabo).subscribe(
      data => {
        Swal.fire({
          title: 'Updated Experience!',
          icon: 'success',
          width: 300,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/experience']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'error',
          width: 350,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/experience']);
      }
    )
  }

}
