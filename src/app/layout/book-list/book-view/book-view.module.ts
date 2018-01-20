import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookViewRoutingModule } from './book-view-routing.module';
import { BookViewComponent } from './book-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BookViewRoutingModule,
    HttpClientModule,
  ],
  declarations: [BookViewComponent]
})
export class BookViewModule { }
