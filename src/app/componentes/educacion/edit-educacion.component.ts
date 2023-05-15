import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';
import { AppComponent } from 'src/app/app.component';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  img: string = '';

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute, public imageService: ImageService, private router: Router, private appComponent: AppComponent, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data => {
        this.educacion = data;
        this.imageService.urlImg = this.educacion.img + `nombre`;
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void { //actualiza la experiencia en la base de datos cuando se envía el formulario
    this.img = this.imageService.urlImg;
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.img = this.imageService.urlImg;
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'educacion_' + id;
    this.imageService.uploadImage($event, name)
  }

  cancel(): void {
    this.imageService.clearUrl();
    alert("Edición cancelada");
    this.router.navigate(['']);
  }
}