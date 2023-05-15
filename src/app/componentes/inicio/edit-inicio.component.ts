import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-inicio',
  templateUrl: './edit-inicio.component.html',
  styleUrls: ['./edit-inicio.component.css'],
})
export class EditInicioComponent implements OnInit {
  persona: persona = null;
  img: string = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
        this.imageService.urlImg = this.persona.img + `nombre`;
      }, err => {
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void { //actualiza la experiencia en la base de datos cuando se envía el formulario
    this.img = this.imageService.urlImg;
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.urlImg;
    this.personaService.update(id, this.persona).subscribe(
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
