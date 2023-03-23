import {Component, OnInit} from '@angular/core';
import {LibroService} from "../../../shared/services/libro.service";

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.scss']
})
export class LibroListComponent implements OnInit{
  public data: any[] = []

  constructor(
    private libroService: LibroService
  ) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.libroService.getAll()
      .subscribe((data: any) => {
        this.data = data;
        console.log(data)
      })
  }

  delete(libro:any){
    this.libroService.delete(libro.id)
      .subscribe((data:any) =>{
        this.getAll()
        console.log("ok")
      })
  }
}
