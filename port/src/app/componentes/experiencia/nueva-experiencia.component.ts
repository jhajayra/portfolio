import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  cargoExp: string = "";
  anioExp: number ;
  lugarExp: string= "";

  constructor(private nuevaServ: ExperienciaService, private ruta: Router) { }

  ngOnInit(): void {

  }

  crear(): void {
    const expe = new Experiencia(this.cargoExp, this.anioExp, this.lugarExp);
    this.nuevaServ.guardarExpe(expe).subscribe(
      data=>{
        alert("Added Experience");
        this.ruta.navigate(['']);
      }, err => {
        alert("Failed, Check Your Information");
        this.ruta.navigate(['']);
      }
    )
  }
}
