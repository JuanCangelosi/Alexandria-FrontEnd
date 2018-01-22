import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { MaterialNavigationModule } from '../../shared/modules/material-components/material-navigation.module';
import { MaterialPopupsModule } from '../../shared/modules/material-components/material-popups.module';
import { MaterialButtonsModule } from '../../shared/modules/material-components/material-buttons.module';
import { MaterialLayoutModule } from '../../shared/modules/material-components/material-layout.module';
import { BookCarouselComponent } from './book-carousel/book-carousel.component';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    BookListRoutingModule,
    MaterialNavigationModule,
    MaterialPopupsModule,
    MaterialButtonsModule,
    MaterialLayoutModule,
    SwiperModule
  ],
  declarations: [BookListComponent, BookCarouselComponent]
})
export class BookListModule { }
