import { ApplicationConfig, importProvidersFrom } from '@angular/core';

//NgRx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './components/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({
        todos: todoReducer,
      }),
    ),
  ],
};
