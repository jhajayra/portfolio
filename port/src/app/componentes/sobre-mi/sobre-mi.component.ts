import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent  implements OnInit {

  protected descripcion:string;

  constructor() {

    this.descripcion = 'describir aqui'

   }

  ngOnInit(): void {
  }

}

