import { Component, OnInit } from '@angular/core';
import { BotonLoginService } from 'src/app/servicios/boton-login.service';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent implements OnInit {

  constructor( private loginServ:BotonLoginService) { }

  ngOnInit(): void {
  }

}
