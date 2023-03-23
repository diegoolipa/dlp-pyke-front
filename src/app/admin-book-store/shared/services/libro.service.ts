import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/api/libros')
  }

  create(libro:any){
    return this.http.post('http://localhost:8080/api/libros',libro);
  }

  get(id:number){
    return this.http.get(`http://localhost:8080/api/libros/${id}`)
  }

  update(id:number, libro:any){
    return this.http.put(`http://localhost:8080/api/libros/${id}`,libro);
  }

  delete(id:number){
    return this.http.delete(`http://localhost:8080/api/libros/${id}`);
  }

  uploadFile(formData:FormData){
    return this.http.post('http://localhost:8080/api/assets/upload',formData);
  }
}
