import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuard } from './shared/auth/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
