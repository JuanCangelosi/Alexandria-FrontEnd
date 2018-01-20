import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public myHtml: any = '<p><strong> Holitas </strong></p>';

  constructor() {
  }

  ngOnInit() {
  }

}
