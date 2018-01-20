import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookcaseRoutingModule } from './bookcase-routing.module';
import { BookcaseComponent } from './bookcase.component';
import { MaterialNavigationModule } from '../../shared/modules/material-components/material-navigation.module';
import { MaterialLayoutModule } from '../../shared/modules/material-components/material-layout.module';
import { MaterialButtonsModule } from '../../shared/modules/material-components/material-buttons.module';

@NgModule({
  imports: [
    CommonModule,
    BookcaseRoutingModule,
    MaterialNavigationModule,
    MaterialLayoutModule,
    MaterialButtonsModule
  ],
  declarations: [BookcaseComponent]
})
export class BookcaseModule { }
