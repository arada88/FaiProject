import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: string[] = [];
  
  task: string;
  addTask() {
    this.tasks.push(this.task);
  }
 
  deleteTask(taskIndex : number) {
    this.tasks = this.tasks.filter((t, index) => index !== taskIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
