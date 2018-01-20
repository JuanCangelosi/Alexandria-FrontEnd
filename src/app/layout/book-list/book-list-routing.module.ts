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
  },
  {
    path: 'bookView',
    loadChildren: 'app/layout/book-list/book-view/book-view.module#BookViewModule'
  },
  {
    path: 'bookCreate',
    loadChildren: 'app/layout/book-list/book-create/book-create.module#BookCreateModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookListRoutingModule { }
