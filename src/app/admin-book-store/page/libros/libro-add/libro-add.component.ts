import {Component, OnInit} from '@angular/core';
import {LibroService} from "../../../shared/services/libro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-libro-add',
  templateUrl: './libro-add.component.html',
  styleUrls: ['./libro-add.component.scss']
})
export class LibroAddComponent  implements OnInit{
  libro={
    titulo:'',
    precio:null,
    rutaArchivo: null,
    rutaImagen: null,
  };
  urlImagen?:string

  constructor(
    private libroService:LibroService,
    private route:Router,
  ) {
  }

  ngOnInit(): void {
  }

  create(){
    console.log(this.libro)
    this.libroService.create(this.libro)
      .subscribe((data:any) =>{
        this.route.navigate([''])
        console.log(data)
      })
  }

  uploadFile(event:any,fieldName:string){
    const file = event.target.files[0]
    if (file){
      const formData = new FormData();
      formData.append('file',file)
      this.libroService.uploadFile(formData)
        .subscribe((response:any)=>{
          if (fieldName == 'rutaArchivo'){
            this.libro.rutaArchivo = response.ruta;
          }else {
            this.libro.rutaImagen = response.ruta;
            this.urlImagen = response.url;

          }
        })
    }
  }
}
