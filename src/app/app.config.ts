import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';

//NgRx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './components/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(StoreModule.forRoot({
        todos: todoReducer,
    })),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
