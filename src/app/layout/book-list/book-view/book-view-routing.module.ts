import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookViewComponent } from './book-view.component';

const routes: Routes = [
  {
    path: '',
    component: BookViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookViewRoutingModule { }
