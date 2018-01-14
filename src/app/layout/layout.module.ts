import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }
