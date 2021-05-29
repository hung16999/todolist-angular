import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css'],
})
export class ViewTodoComponent implements OnInit {
  constructor() {}
  @Input() tasks: any;

  ngOnInit(): void {}
}