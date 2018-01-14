import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialNavigationModule } from '../../modules/material-components/material-navigation.module';
import { MaterialButtonsModule } from '../../modules/material-components/material-buttons.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialNavigationModule,
    MaterialButtonsModule,
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
