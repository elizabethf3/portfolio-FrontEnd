import { Component, OnInit, TemplateRef } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
// import { ImageService } from 'src/app/servicios/image.service';
import { AppComponent } from 'src/app/app.component';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  id: number;
  name: string = "";

  constructor(private educacionS: EducacionService, private tokenService: TokenService, private appComponent: AppComponent, public imageS: ImageService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }


  confirm(id: number): void {
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.name = "educacion_"
          this.imageS.deleteImage(this.id, this.name); // llama a la función deleteImage()
          alert('Educación eliminada con éxito');
          this.cargarEducacion();
        }, err => {
          alert('No se pudo eliminar la educación')
        }
      )
    }
  }
  
}
