import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDataRoutingModule } from './book-data-routing.module';
import { BookDataComponent } from './book-data.component';
import { MaterialLayoutModule } from '../../../shared/modules/material-components/material-layout.module';
import { MaterialButtonsModule } from '../../../shared/modules/material-components/material-buttons.module';


@NgModule({
  imports: [
    CommonModule,
    BookDataRoutingModule,
    MaterialLayoutModule,
    MaterialButtonsModule
  ],
  declarations: [BookDataComponent]
})
export class BookDataModule { }
