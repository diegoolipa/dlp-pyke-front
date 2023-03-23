import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBookStoreRoutingModule } from './admin-book-store-routing.module';
import { LibroListComponent } from './page/libros/libro-list/libro-list.component';
import {LibroService} from "./shared/services/libro.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LibroAddComponent } from './page/libros/libro-add/libro-add.component';
import { LibroEditComponent } from './page/libros/libro-edit/libro-edit.component';


@NgModule({
  declarations: [
    LibroListComponent,
    LibroAddComponent,
    LibroEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminBookStoreRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LibroService,
  ],
})
export class AdminBookStoreModule { }
