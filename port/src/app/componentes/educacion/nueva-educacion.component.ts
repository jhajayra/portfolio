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
  urlEdu: string;

  constructor(private eduServ: EducacionService, private ruta:Router) { }

  ngOnInit(): void {
  }

  crearEdu(): void{
    const educacion =new Educacion(this.tituloEdu, this.lugarEdu, this.anioEdu, this.urlEdu);
    this.eduServ.guardarEdu(educacion).subscribe(
      data => {
        Swal.fire({
          title: 'Added Education!',
          icon: 'success',
          width: 300,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/education']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'error',
          width: 350,
          padding: '1em',
          confirmButtonColor: 'rgb(170, 5, 74)',
        });
        this.ruta.navigate(['/education']);
      }
    )
  }

}
