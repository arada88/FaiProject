import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  items: string[] = ['Fashion','Electronic','Sports','Music']

  constructor() { }

  ngOnInit(): void {
  }

}
