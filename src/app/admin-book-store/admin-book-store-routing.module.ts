import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibroListComponent} from "./page/libros/libro-list/libro-list.component";
import {LibroAddComponent} from "./page/libros/libro-add/libro-add.component";
import {LibroEditComponent} from "./page/libros/libro-edit/libro-edit.component";

const routes: Routes = [
  {
    path:'',
    component:LibroListComponent
  },
  {
    path:'add',
    component:LibroAddComponent
  },
  {
    path:':id',
    component:LibroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBookStoreRoutingModule { }
