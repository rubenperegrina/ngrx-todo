import { Action, createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from '../models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Ir al cine'),
  new Todo('Comer sushi'),
  new Todo('Leer un libro')
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { text }) => [...state, new Todo(text)]),
  on(limpiarTodos, state => state.filter(todo => !todo.completed)),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggle, (state, { id }) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }

    });
  }),
  on(toggleAll, (state, { completed }) => state.map(todo => {

    return {
      ...todo,
      completed: completed
    }

  })),
  on(editar, (state, { id, text }) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          text: text
        }
      } else {
        return todo;
      }

    });
  }),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}