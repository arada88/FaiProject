import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   @Input()
   title: string;


  constructor() { }

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count = 0;
  countNumber() {
    this.count = this.count + 1;
    }

  ngOnInit(): void {
  }

}
