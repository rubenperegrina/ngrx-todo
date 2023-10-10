import { createAction, props } from '@ngrx/store';
import { filtrosValidos } from '../models/filtro.model';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);
