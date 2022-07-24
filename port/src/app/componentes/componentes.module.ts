import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BotonLoginComponent } from './boton-login/boton-login.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';

@NgModule({
  declarations: [
    BarraLateralComponent,
    BotonLoginComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BarraNavComponent
  ],
  imports: [
    CommonModule,
    
  ],

  exports: [
    BarraLateralComponent,
    BotonLoginComponent,
    EducacionComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    BarraNavComponent
  ]
})
export class ComponentesModule { }
