import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  tituloEdu :string;
  lugarEdu: string;
  anioEdu: string;

  constructor(private eduServ: EducacionService, private ruta:Router) { }

  ngOnInit(): void {
  }

  crearEdu(): void{
    const educacion =new Educacion(this.tituloEdu, this.lugarEdu, this.anioEdu);
    this.eduServ.guardarEdu(educacion).subscribe(
      data => {
        alert("Education Saved");
        this.ruta.navigate(['']);
      }, err => {
        alert("Failed");
        this.ruta.navigate(['']);
      }
    )
  }

}
