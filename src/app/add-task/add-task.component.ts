import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { v4 } from 'uuid';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() newTask = new EventEmitter<string>();

  addNewTask = (value: string) => {
    this.newTask.emit(value);
  };
}
