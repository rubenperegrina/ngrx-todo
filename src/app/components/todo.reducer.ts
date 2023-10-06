import { Action, createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from '../models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo')
];

export const _todoReducer = createReducer(
    estadoInicial,
  on( crear, (state, { text }) => [...state, new Todo( text )  ] ),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action);
}