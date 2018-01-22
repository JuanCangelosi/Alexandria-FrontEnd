import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './shared/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // Authentication providers
    AuthenticationService,
    AuthGuard,
    AuthService,
    {
      provide: HttpClient,
      useClass: AuthInterceptor,
      multi: true,
    }

    // Backend connection providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
