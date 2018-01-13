import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  declarations: [],
  exports: [
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
  ]
})
export class MaterialPopupsModule { }
