import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  inicio: string = '';
  fin: string = '';
  img: string = '';

  constructor(private sEducacion: EducacionService, private router: Router, public imageService: ImageService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.imageService.clearUrl();
  }

  onCreate(): void {
    this.img = this.imageService.urlImg;
    const expe = new Educacion(this.nombre, this.descripcion, this.inicio, this.fin, this.img);
    this.sEducacion.save(expe).subscribe(
      data => {
        alert('Educación añadida con éxito');
        this.router.navigate(['']);
      }, err => {
        alert('Falló al añadir la educación');
        this.router.navigate(['']);
      }
    );
  }


  uploadImage($event: any) {
    const name = "educacion_" + this.nombre; //se utiliza para construir un nombre para la imagen.
    this.imageService.uploadImage($event, name)
  }

  cancel(): void {
    this.imageService.clearUrl();
    alert("Edición cancelada");
    this.router.navigate(['']);
  }
}
