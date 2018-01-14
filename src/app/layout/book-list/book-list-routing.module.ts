import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'bookData',
    loadChildren: 'app/layout/book-list/book-data/book-data.module#BookDataModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookListRoutingModule { }
