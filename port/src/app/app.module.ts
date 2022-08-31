import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
   AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentesModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
