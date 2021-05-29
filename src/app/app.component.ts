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
}
