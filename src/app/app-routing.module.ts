import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  /*{
    path: '',
    component: AppComponent,
  },
  */
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'register',
    loadChildren: 'app/register/register.module#RegisterModule'
  },
  {
    path: '',
    loadChildren: 'app/layout/layout.module#LayoutModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }