import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from 'src/app/models/SoftSkills';
import { SoftSkillsService } from 'src/app/servicios/soft-skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-soft',
  templateUrl: './nueva-soft.component.html',
  styleUrls: ['./nueva-soft.component.css']
})
export class NuevaSoftComponent implements OnInit {

  nombreSoft: string;

  constructor(private ruta: Router,
    private softServ: SoftSkillsService) { }

  ngOnInit(): void {
  }

  crearSoft(): void {
    const soft = new SoftSkills(this.nombreSoft);
    this.softServ.guardarSoft(soft).subscribe(
      data => {
        Swal.fire({
          title: 'Added Soft Skill!',
          icon: 'success',
          width: 300,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.8)',
          confirmButtonColor: 'rgb(69, 170, 69)',
        });
        this.ruta.navigate(['/skills']);
      }, err => {
        Swal.fire({
          title: 'Failed, Check Your Information.',
          icon: 'warning',
          width: 350,
          padding: '1em',
          color: '#fff',
          background: 'rgb(1, 1, 1, 0.84)',
          showConfirmButton: false,
          timer: 2000
        });
        this.ruta.navigate(['/skills']);
      }
    )
  }

}
