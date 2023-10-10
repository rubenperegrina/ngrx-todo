import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../models/filtro.model';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filtroTodo',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completed);

      case 'pendientes':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
}
