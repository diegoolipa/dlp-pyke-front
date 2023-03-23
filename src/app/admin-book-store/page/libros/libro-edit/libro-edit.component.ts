import {Component, OnInit} from '@angular/core';
import {LibroService} from "../../../shared/services/libro.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.scss']
})
export class LibroEditComponent implements OnInit {

  libro: any;

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.libroService.get(id)
      .subscribe((data: any) => {
        this.libro = data[0];
        console.log(this.libro)
      })
  }

  update() {
    console.log(this.libro)
    this.libroService.update(this.libro.id, this.libro)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigate([''])
      })
  }

}
