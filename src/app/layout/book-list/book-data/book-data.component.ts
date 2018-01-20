import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public read() {
    this.router.navigate(['../bookView']);
  }

}
