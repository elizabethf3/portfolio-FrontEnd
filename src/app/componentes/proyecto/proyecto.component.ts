import { Component, OnInit, TemplateRef} from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyecto: Proyecto[] = [];
  id: number;
  
  constructor(private proyectoS: ProyectoService, private tokenService: TokenService, private appComponent: AppComponent) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    const miEnlace = document.getElementById("enlace") as HTMLAnchorElement;
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

 delete(id?: number){
  if( id != undefined){
    this.proyectoS.delete(id).subscribe(
      data => {
        alert('Proyecto eliminado con éxito');
        this.cargarProyecto();
      }, err => {
        alert("No se pudo eliminar");
      }
    )
  }
}
}
