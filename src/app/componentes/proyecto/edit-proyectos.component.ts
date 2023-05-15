import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent {
  numero:string="05";
  proyecto: Proyecto = null;
  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, private appComponent: AppComponent){}

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);

      }
    )
  }

  onUpdate(): void{ //actualiza el proyecto en la base de datos cuando se envía el formulario
    if (!this.proyecto.url) {
      alert("Por favor ingrese una URL.");
      return;
    }
    const id= this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe(
      data =>{
        alert("Proyecto actualizado");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  cancel(): void {
    alert("Edición cancelada");
    this.router.navigate(['']);
  }
}