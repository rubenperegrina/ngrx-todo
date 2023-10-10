import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltroPipe } from 'src/app/pipes/filtro.pipe';
import { filtrosValidos } from 'src/app/models/filtro.model';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FiltroPipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}