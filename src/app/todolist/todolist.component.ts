import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  @Input() task: string;

  arraytask = [];
  constructor() { }
  addtask() {
    this.arraytask.push([this.task])
  }
  deletetask(x){
    this.arraytask = this.arraytask.filter(item => item !== x);
  }

  ngOnInit(): void {
  }

}
