import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  
  id: string;

  constructor() {

    this.id = ''

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  grabID(id: string) {
    this.id = id;
  }
  
}
