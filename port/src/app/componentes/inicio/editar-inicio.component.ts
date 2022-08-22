import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { InicioService } from 'src/app/servicios/inicio.service';

@Component({
  selector: 'app-editar-inicio',
  templateUrl: './editar-inicio.component.html',
  styleUrls: ['./editar-inicio.component.css']
})
export class EditarInicioComponent implements OnInit {

  usuario :Usuario;

  constructor(private homeServ: InicioService,
    private activateRouter:ActivatedRoute,
    private ruta:Router) { }

  ngOnInit(): void {
    this.homeServ.traerUsuario().subscribe(
      data => {
        this.usuario = data;
      }, err =>{
        alert("Wrong Update");
        this.ruta.navigate(['']);
      }
    
    )
  }

  actualizar():void {
    const id = 1;
    this.homeServ.editarUsuario(this.usuario).subscribe(
      data => {
        alert("User Update");
        this.ruta.navigate(['']);
      }, err => {
        alert("Wrong Update");
        this.ruta.navigate(['']);
      }
    )
  }

}
