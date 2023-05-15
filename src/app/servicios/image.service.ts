import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, list, deleteObject } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  urlImg: string = "";
  nombre: string = "";
  constructor(private storage: Storage) { }
  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name)
    this.nombre = name;
    uploadBytes(imgRef, file)
      .then(response => { this.getImages() })
      .catch(error => console.log(error))
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          if(this.nombre==item.name){
            this.urlImg=this.url;
          }
        }
      })
      .catch(error => console.log(error))
  }

  clearUrl() {
    this.url = "";
    this.urlImg ="";
  }

  deleteImage(id: number, name:string) {
    this.nombre = name;
    const imgRef = ref(this.storage, `imagen/` + name + id);
    deleteObject(imgRef)
      .then(() => console.log('Imagen eliminada exitosamente'))
      .catch((error) => console.log(error));
  }

}
