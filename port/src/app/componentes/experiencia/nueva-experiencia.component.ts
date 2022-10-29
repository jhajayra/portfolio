import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  cargoExp: string;
  lugarExp: string;
  anioInicio: number ;
  mesInicio: string;
  anioFin: number;
  mesFin: string;

  constructor(private nuevaServ: ExperienciaService, private ruta: Router) { }

  ngOnInit(): void {

  }

  crear(): void {
    const expe = new Experiencia(this.cargoExp, this.lugarExp, this.anioInicio, this.mesInicio, this.anioFin, this.mesFin);
    this.nuevaServ.guardarExpe(expe).subscribe(
      data => {
        Swal.fire({
          title: 'Added Experience!',
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
