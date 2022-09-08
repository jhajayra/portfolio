import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion:Educacion=null;

  constructor(private eduServ: EducacionService,
              private activateRoute: ActivatedRoute,
              private ruta : Router) { }

  ngOnInit(): void {
    const id =this.activateRoute.snapshot.params['id'];
    this.eduServ.verEdu(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Failed ");
        this.ruta.navigate(['']);
      }
    )
  }

  actualizar():void {
    const id = this.activateRoute.snapshot.params['id'];
    this.eduServ.editarEdu(id,this.educacion).subscribe(
      data => {
        this.ruta.navigate(['']);
      }, err => {
        alert("Wrong Update, Check Your Information");
        this.ruta.navigate(['']);
      }
    )
  }

}
