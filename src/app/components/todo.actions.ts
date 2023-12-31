import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, text: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle TodoAll',
    props<{ completed: boolean }>()
);

export const limpiarTodos = createAction('[TODO] Limpiar TODOS');