import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  title = 'navbar';
  pages = ['Home', 'Mission', 'How we get there', 'About', 'Contact Us']

  constructor() { }

  ngOnInit() {
  }
}
