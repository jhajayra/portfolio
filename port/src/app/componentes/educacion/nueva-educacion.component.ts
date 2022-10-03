import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  tituloEdu :string;
  lugarEdu: string;
  anioEdu: number;

  constructor(private eduServ: EducacionService, private ruta:Router) { }

  ngOnInit(): void {
  }

  crearEdu(): void{
    const educacion =new Educacion(this.tituloEdu, this.lugarEdu, this.anioEdu);
    this.eduServ.guardarEdu(educacion).subscribe(
      data => {
        Swal.fire({
          title: 'Added Education!',
          icon: 'success',
          width: 300,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/education']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'error',
          width: 350,
          padding: '1em',
          background: 'radial-gradient( circle farthest-corner at 7.5% 14.2%,  rgba(254,243,240,1) 0%, rgba(250,236,252,1) 90% )',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/education']);
      }
    )
  }

}
