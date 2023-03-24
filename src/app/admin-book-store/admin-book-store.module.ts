import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBookStoreRoutingModule } from './admin-book-store-routing.module';
import { LibroListComponent } from './page/libros/libro-list/libro-list.component';
import {LibroService} from "./shared/services/libro.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LibroAddComponent } from './page/libros/libro-add/libro-add.component';
import { LibroEditComponent } from './page/libros/libro-edit/libro-edit.component';
import {MaterialModule} from "../material/material.module";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({

  declarations: [
    LibroListComponent,
    LibroAddComponent,
    LibroEditComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCardModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AdminBookStoreRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    LibroService,
  ],
})
export class AdminBookStoreModule { }
