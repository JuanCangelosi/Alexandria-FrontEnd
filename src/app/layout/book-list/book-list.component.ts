import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  bookList = {
    title: 'Recomendados',
    books : [
      {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    ]
  };

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public seeBook(book: any) {
    this.router.navigate(['bookData']);
  }
  public createBook(book: any) {
    this.router.navigate(['bookCreate']);
  }

}
