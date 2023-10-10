import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/models/filtro.model';
import { setFiltro } from 'src/app/filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'todo-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-buttons.component.html',
  styleUrls: ['./todo-buttons.component.scss']
})
export class TodoButtonsComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos','completados','pendientes'];
  pendientes: number = 0;

  constructor( private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes   = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  cambiarFiltro( filtro: filtrosValidos ) {
    this.store.dispatch( setFiltro({ filtro }) );
  }

  limpiarCompletados() {
    this.store.dispatch( limpiarTodos() )
  }
}
