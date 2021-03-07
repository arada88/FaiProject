import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  
  //task: Task;
  taskName: string;
  taskDescription: string;

  addTask() {
    let tempTesk: Task = {
      id: this.createUUID(),
      name: this.taskName,
      description: this.taskDescription
    }
    this.tasks.push(tempTesk);
  }
 
  deleteTask(taskComponent: TaskComponent) {
    this.tasks = this.tasks.filter(t => t.id !== taskComponent.taskObj.id);
  }

  createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
