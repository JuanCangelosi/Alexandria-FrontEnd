import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCreateRoutingModule } from './book-create-routing.module';
import { BookCreateComponent } from './book-create.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { MaterialFormsModule } from '../../../shared/modules/material-components/material-forms.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BookCreateRoutingModule,
    QuillEditorModule,
    MaterialFormsModule,
    FormsModule
  ],
  declarations: [BookCreateComponent]
})
export class BookCreateModule { }
