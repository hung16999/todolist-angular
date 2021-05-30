import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { v4 } from 'uuid';
import { listTask } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks = listTask;

  addTask = (name: string) => {
    const newTask: Task = { id: v4(), name: name, done: false };
    this.tasks.unshift(newTask);
  };

  removeTask = (task: Task) => {
    const indexOfTask = this.tasks.indexOf(task);
    this.tasks.splice(indexOfTask, 1);
  };
}
