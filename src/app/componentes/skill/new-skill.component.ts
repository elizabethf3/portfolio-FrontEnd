import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  numero: string="04"
  nombre: string;
  porcentaje: number;
  color: string = '';
  
  constructor(private skills: SkillService, private router: Router, private appComponent: AppComponent){}

  ngOnInit(): void {
    this.color = '#3d685f'
  }

  onCreate(): void{
    if (this.nombre.length > 10) {
      alert("El nombre de la skill no debe ser mas de 10 caracteres.");
      return;
    }
    if (!this.porcentaje) {
      alert("Por favor ingrese un porcentaje.");
      return;
    }
    if (this.porcentaje < 0 || this.porcentaje > 100) {
      alert("El porcentaje debe estar entre 1 y 100.");
      return;
    }
    const skill = new Skill(this.nombre, this.porcentaje, this.color);
    this.skills.save(skill).subscribe(
      data =>{
        console.log("Skill añadida con éxito");
        this.router.navigate(['']);
      }, err =>{
        console.log("Falló al añadir la skill");
        this.router.navigate(['']);
      } 
    )
  }

  cancel(): void {
    console.log("Adición cancelada");
    this.router.navigate(['']);
  }
}
