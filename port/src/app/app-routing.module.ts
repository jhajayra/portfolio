import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent} from './componentes/inicio/inicio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
//editar experiencias
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
//editar educaciones
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
//editar proyectos
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
//editar skills
import { NuevaSkillComponent } from './componentes/skills/nueva-skill.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill.component';
//editar inicio y  sobre-mi
import { EditarSobreMiComponent } from './componentes/sobre-mi/editar-sobre-mi.component';
import { EditarInicioComponent } from './componentes/inicio/editar-inicio.component';


const routes: Routes = [
  { path: 'home', component: InicioComponent },
  {path: 'login', component: BotonLoginComponent},
  {path: 'about', component: SobreMiComponent},
  {path:'experience', component: ExperienciaComponent},
  {path:'education', component: EducacionComponent},
  {path:'projects', component: ProyectosComponent},
  {path:'skills', component: SkillsComponent},
  
  //editar y agregar experiencias
  {path:'new-experience', component: NuevaExperienciaComponent},
  {path:'edit-experience/:id', component: EditarExperienciaComponent},

  //editar y agregar educaciones
  {path:'new-education', component: NuevaEducacionComponent},
  {path:'edit-education/:id', component: EditarEducacionComponent},

  //editar y agregar proyectos
  {path: 'new-project', component: NuevoProyectoComponent},
  {path: 'edit-project/:id', component: EditarProyectoComponent},

  //editar y agregar skills
  {path: 'new-skill', component: NuevaSkillComponent},
  {path:'edit-skill/:id', component: EditarSkillComponent},

  //editar sobre-mi
  {path:'edit-about/:idPer', component: EditarSobreMiComponent},

  //editar inicio
  {path: 'edit-home/:idPer', component: EditarInicioComponent},

  //redirecciona a inicio
  {path:'', component: InicioComponent, pathMatch: 'full'},
  //{path:'**', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
