import { Component, Output } from '@angular/core';
import { v4 } from 'uuid';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-angular';
}
