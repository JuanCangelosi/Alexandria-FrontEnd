import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showSearch = false;

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  public showMessages() {
    this.router.navigate(['/message']);
  }
  public showComments() {
    this.router.navigate(['/message']);
  }
  public showMainScreen() {
    this.router.navigate(['/booklist']);
  }
  public showBookcase() {
    this.router.navigate(['/bookcase']);
  }

}
