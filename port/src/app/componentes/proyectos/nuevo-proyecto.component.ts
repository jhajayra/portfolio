import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

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
        alert("Added Project");
        this.ruta.navigate(['/projects']);
      }, err => {
        alert("Failed, Check Your Information");
        this.ruta.navigate(['/projects']);
      }
    )
  }

}