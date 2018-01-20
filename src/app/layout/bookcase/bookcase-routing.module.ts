import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookcaseComponent } from './bookcase.component';

const routes: Routes = [
  {
    path: '',
    component: BookcaseComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookcaseRoutingModule { }
