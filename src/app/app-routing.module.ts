import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// @ts-ignore
const routes: Routes = [

  { //importando el modulo website
    path: '',
    loadChildren: () => import('./admin-book-store/admin-book-store.module').then((m:any) => m.AdminBookStoreModule)
  },
  { //importando el modulo website
    path: 'website',
    loadChildren: () => import('./website-book-store/website-book-store.module').then((m:any) => m.WebsiteBookStoreModule),
  },
  { //importando el modulo website
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then((m:any) => m.TiendaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
