import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoButtonsComponent } from '../todo-buttons/todo-buttons.component';

@Component({
  selector: 'todo-page',
  standalone: true,
  imports: [CommonModule, TodoAddComponent, TodoListComponent, TodoButtonsComponent],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

}
