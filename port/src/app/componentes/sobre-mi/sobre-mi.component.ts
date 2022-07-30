import { Component, OnInit } from '@angular/core';

import { SobremiService } from 'src/app/servicios/sobremi.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent  implements OnInit {

  protected descripcion:string;

  constructor(private aboutServ:SobremiService) {

    this.descripcion = 'describir aqui'

   }

  ngOnInit(): void {
  }

}

