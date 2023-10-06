import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

@Component({
  selector: 'todo-root',
  standalone: true,
  imports: [CommonModule, TodoFooterComponent, TodoPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-todo';
}
