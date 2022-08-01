import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';


import { Observable } from 'rxjs';
import { AppComponent } from './app.component';






@NgModule({
  declarations: [
   AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentesModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
