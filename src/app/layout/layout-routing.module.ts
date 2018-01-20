import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'booklist'
      },
      {
        path: 'booklist',
        loadChildren: 'app/layout/book-list/book-list.module#BookListModule'
      },
      {
        path: 'user',
        loadChildren: 'app/layout/user/user.module#UserModule'
      },
      {
        path: 'message',
        loadChildren: 'app/layout/message/message.module#MessageModule'
      },
      {
        path: 'bookcase',
        loadChildren: 'app/layout/bookcase/bookcase.module#BookcaseModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
