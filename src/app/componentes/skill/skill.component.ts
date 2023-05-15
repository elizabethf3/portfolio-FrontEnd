import { Component, OnInit, TemplateRef } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{
  skill: Skill[] = [];
  id: number;

  constructor(private skills: SkillService, private tokenService: TokenService, private appComponent: AppComponent) { }
  isLogged = false;

  ngOnInit() {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skills.lista().subscribe(
      data=>{
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skills.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}

  

  

