import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './componentes/login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';



import { HomeComponent } from './componentes/home/home.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditInicioComponent } from './componentes/inicio/edit-inicio.component';
import { EditProyectosComponent } from './componentes/proyecto/edit-proyectos.component';
import { NewProyectosComponent } from './componentes/proyecto/new-proyectos.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    EditInicioComponent,
    EditProyectosComponent,
    NewProyectosComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
