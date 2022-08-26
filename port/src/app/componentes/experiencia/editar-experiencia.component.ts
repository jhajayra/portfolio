import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  expeLabo: Experiencia = null;
  
  constructor(private experiencia:ExperienciaService,
    private activateRouter:ActivatedRoute,
    private ruta:Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.experiencia.verExpe(id).subscribe(
      data => {
        this.expeLabo = data;
      }, err =>{
        alert("Wrong Update");
        this.ruta.navigate(['']);


      }
    )
  }
  actualizar():void{
    const id = this.activateRouter.snapshot.params['id'];
    
    this.experiencia.actualizarExpe(id,this.expeLabo).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err =>{
        alert("Wrong Update");
        this.ruta.navigate(['']);
      }
    )
  }

}
