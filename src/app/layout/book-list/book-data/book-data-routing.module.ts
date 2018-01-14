import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDataComponent } from './book-data.component';

const routes: Routes = [
  {
    path: '',
    component: BookDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDataRoutingModule { }
