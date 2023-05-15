import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { AuthGuard } from './servicios/auth.guard';
import { EditInicioComponent } from './componentes/inicio/edit-inicio.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';
import { NewProyectosComponent } from './componentes/proyecto/new-proyectos.component';
import { EditProyectosComponent } from './componentes/proyecto/edit-proyectos.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path:'editinicio/:id', component: EditInicioComponent, canActivate: [AuthGuard]},

  { path:'newedu', component: NewEducacionComponent, canActivate: [AuthGuard]},
  { path:'editedu/:id', component: EditEducacionComponent, canActivate: [AuthGuard]},

  { path:'newskill', component: NewSkillComponent, canActivate: [AuthGuard]},
  { path:'editskill/:id', component: EditSkillComponent, canActivate: [AuthGuard]},

  { path:'newproye', component: NewProyectosComponent},
  { path:'editproye/:id', component: EditProyectosComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
