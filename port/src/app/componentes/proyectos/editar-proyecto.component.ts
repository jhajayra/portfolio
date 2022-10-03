import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proye: Proyectos = null;
  
  constructor(private proyeServ:ProyectosService,
    private activateRouter:ActivatedRoute,
    private ruta:Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyeServ.verProye(id).subscribe(
      data => {
        this.proye = data;
      }, err =>{
        alert("Failed");
        this.ruta.navigate(['']);
      }
    )
  }
  actualizar():void{
    const id = this.activateRouter.snapshot.params['id'];
    this.proyeServ.actualizarProye(id,this.proye).subscribe(
      data => {
        this.ruta.navigate(['/projects']);
      }, err =>{
        alert("Wrong Update, Check Your Information");
        this.ruta.navigate(['/projects']);
      }
    )
  }

}
