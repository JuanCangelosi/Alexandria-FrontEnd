import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialFormsModule } from '../shared/modules/material-components/material-forms.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
