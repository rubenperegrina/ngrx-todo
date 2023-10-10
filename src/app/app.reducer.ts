import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./components/todo.reducer";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./models/todo.model";
import { filtrosValidos } from "./models/filtro.model";

export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
  }
   
  export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
  }