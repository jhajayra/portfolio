import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  isLogged = false;
  
  constructor(private token: TokenService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {

    

    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }

     /** spinner starts */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 5000);
   }
  
 
  onLogOut():void{
    this.token.logOut();
    window.location.reload();
  }

}
