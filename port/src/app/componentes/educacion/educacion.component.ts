import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[]= [];  
  
  isLogged = false;

  constructor( private token:TokenService, private eduServ: EducacionService ) {  }


  ngOnInit(): void {
    this.cargarEducacion();
    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
      }

      
  }

    cargarEducacion():void{
      this.eduServ.lista().subscribe(
        data => {
          this.edu = data});
    } 

    borrarEdu(idEdu?: number){
      Swal.fire({
        title: 'Are You Sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        width: 350,
        padding: '1em',
        color: '#fff',
        background: 'rgb(1, 1, 1, 0.8)',
        showCancelButton: true,
        confirmButtonColor: 'rgb(190, 41, 116)',
        cancelButtonColor: 'rgb(150, 84, 116',
        confirmButtonText: 'Yes, Delete It!',
      
      }).then((result) => {
        if (result.isConfirmed){
          this.eduServ.borrarEdu(idEdu).subscribe(
            data => {
              this.cargarEducacion();
              Swal.fire({
                title: 'Deleted!',
                icon: 'success',
                width: 350,
                padding: '1em',
                color: '#fff',
                background: 'rgb(1, 1, 1, 0.8)',
                showConfirmButton: false,
                timer: 1700
              });
            })
          } else {
            Swal.fire({
              title: 'Cancelled!',
              icon: 'error',
              width: 350,
              padding: '1em',
              color: '#fff',
              background: 'rgb(1, 1, 1, 0.8)',
              showConfirmButton: false,
              timer: 1700
            });
          }
    
        }
        )
        
      }
    }
    