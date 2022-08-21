import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from '../app-routing.module';

import { BotonLoginComponent } from './boton-login/boton-login.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { BtnRedesComponent } from './btn-redes/btn-redes.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto.component';
import { NuevaSkillComponent } from './skills/nueva-skill.component';
import { EditarSkillComponent } from './skills/editar-skill.component';
import { EditarSobreMiComponent } from './sobre-mi/editar-sobre-mi.component';
import { EditarInicioComponent } from './inicio/editar-inicio.component';




@NgModule({
  declarations: [
    BotonLoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BtnRedesComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    NuevaSkillComponent,
    EditarSkillComponent,
    EditarSobreMiComponent,
    EditarInicioComponent,
  

    

    

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({
     
      
      radius:40,
      outerStrokeWidth: 7,
      outerStrokeColor: "palevioletred",
      innerStrokeWidth: 0,
      showInnerStroke:false,

      showTitle:false,

      subtitle: "",
      subtitleFontSize:"17",
      subtitleColor:"peachpuff",
      subtitleFontWeight:"500",


      showUnits: false,

      backgroundColor:"pink",
      backgroundOpacity: 0.3,
      backgroundPadding:3,
      backgroundStrokeWidth:5,
      })
    
  ],

  exports: [
    BotonLoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BtnRedesComponent
  ]
})
export class ComponentesModule { }
