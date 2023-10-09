import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoButtonsComponent } from '../todo-buttons/todo-buttons.component';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'todo-page',
  standalone: true,
  imports: [CommonModule, TodoAddComponent, TodoListComponent, TodoButtonsComponent],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  completed: boolean = false;

  constructor( private store: Store<AppState>){}

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAll({ completed: this.completed }))
  }
}
