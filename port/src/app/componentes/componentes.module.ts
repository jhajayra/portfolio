import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


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
import { LoginComponent } from './login/login.component';
import { EditarInicioComponent } from './inicio/editar-inicio.component';
import { NuevaSoftComponent } from './skills/nueva-soft/nueva-soft.component';
import { EditarSoftComponent } from './skills/nueva-soft/editar-soft.component';
import { SoftSkillsComponent } from './skills/nueva-soft/soft-skills.component';




@NgModule({
  declarations: [
    LoginComponent,
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

    EditarInicioComponent,
    NuevaSoftComponent,
    EditarSoftComponent,
    SoftSkillsComponent,

  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({


      radius: 30,
      outerStrokeWidth: 5,
      outerStrokeColor: "palevioletred",
      innerStrokeWidth: 0,
      showInnerStroke: false,

      showTitle: false,

      subtitle: "",
      subtitleFontSize: "14",
      subtitleColor: "peachpuff",
      subtitleFontWeight: "400",


      showUnits: false,

      backgroundColor: "pink",
      backgroundOpacity: 0.3,
      backgroundPadding: 3,
      backgroundStrokeWidth: 5,
    })

  ],

  exports: [
    LoginComponent,
    EducacionComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BtnRedesComponent
  ]
})
export class ComponentesModule { }
