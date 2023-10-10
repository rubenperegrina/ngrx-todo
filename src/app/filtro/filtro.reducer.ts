import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';
import { filtrosValidos } from '../models/filtro.model';


export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(initialState,
  on( setFiltro , (state, { filtro }) => filtro ),

);

export function filtroReducer(state: filtrosValidos | undefined, action: Action) {
  return _filtroReducer(state, action);
}