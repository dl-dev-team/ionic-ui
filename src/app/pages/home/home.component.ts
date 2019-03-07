import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menuList = [];
  constructor() { 
    this.menuList=['1','2','3'];
  }
  
  ngOnInit() {}

}
