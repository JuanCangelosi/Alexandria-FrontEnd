import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialNavigationModule } from '../../modules/material-components/material-navigation.module';
import { MaterialButtonsModule } from '../../modules/material-components/material-buttons.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialNavigationModule,
    MaterialButtonsModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
