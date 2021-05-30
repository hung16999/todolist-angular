import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent {
  @Input() task!: Task;

  @Output() taskRemove = new EventEmitter<Task>();

  removeTask = (task: Task) => {
    this.taskRemove.emit(task);
  };
}
