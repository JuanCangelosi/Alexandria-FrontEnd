import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css']
})
export class BookCarouselComponent implements OnInit {
  @Input('bookList') bookList;

  config: SwiperOptions = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public seeBook(book: any) {
    this.router.navigate(['bookData']);
  }

}
