import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InicioComponent} from './componentes/inicio/inicio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


const routes: Routes = [
  { path: 'home', component: InicioComponent },
  {path: 'about', component: SobreMiComponent},
  {path:'experience', component: ExperienciaComponent},
  {path:'education', component: EducacionComponent},
  {path:'projects', component: ProyectosComponent},
  {path:'skills', component: SkillsComponent},
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'**', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
