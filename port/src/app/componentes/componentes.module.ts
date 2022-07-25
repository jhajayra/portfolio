import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotonLoginComponent } from './boton-login/boton-login.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    BotonLoginComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    
  ],

  exports: [
    BotonLoginComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent
  ]
})
export class ComponentesModule { }
