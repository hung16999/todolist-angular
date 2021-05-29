import { Component } from '@angular/core';
import { v4 } from 'uuid';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-angular';

  listTask: Task[] = [
    { id: v4(), name: 'sleep', done: false },
    { id: v4(), name: 'breakfast', done: true },
    { id: v4(), name: 'uong ruou', done: false },
    { id: v4(), name: 'nau com', done: true },
    { id: v4(), name: 'nau com', done: true },
  ];

  addTask = (name: string) => {
    const newTask = {
      id: v4(),
      name: name,
      done: false,
    };

    this.listTask.unshift(newTask);
  };

  removeTask = (task: Task) => {
    const indexOfTask = this.listTask.indexOf(task);
    this.listTask.splice(indexOfTask, 1);
  };
}
