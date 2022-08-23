import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { InicioService } from 'src/app/servicios/inicio.service';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent implements OnInit {

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
    const idPer = 1;
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
