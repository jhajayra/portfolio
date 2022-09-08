import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  isLogged = false;
  
  constructor(private token: TokenService){}

  ngOnInit(): void {
    if (this.token.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }
 
  onLogOut():void{
    this.token.logOut();
    window.location.reload();
  }

}
