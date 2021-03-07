import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChildren(TaskComponent) taskComps: QueryList<TaskComponent>;

  tasks: Task[] = [];
  
 
  taskName: string;
  taskDescription: string;

  taskSelect: Task;

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

  selectedTask(taskComponent: TaskComponent) {
    this.clearSelected();
    taskComponent.isSelected = true;
    this.taskSelect = taskComponent.taskObj;
  }
    clearSelected() {
      this.taskComps.forEach(task => {
        task.isSelected = false;
      })
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
