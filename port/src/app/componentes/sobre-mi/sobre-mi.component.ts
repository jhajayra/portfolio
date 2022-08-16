import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { InicioService } from 'src/app/servicios/inicio.service';



@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent  implements OnInit {

  usuario: Usuario = new Usuario("", "", "")

  constructor(private usuarioServ:InicioService ) {

  }

  ngOnInit(): void {
    this.usuarioServ.traerUsuario().subscribe(data => {this.usuario = data})
  }

}

