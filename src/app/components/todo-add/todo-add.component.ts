import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'todo-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor( private store: Store<AppState> ) {
    this.txtInput = new FormControl('', Validators.required );
  }

  agregar() {
    if ( this.txtInput.invalid ) { return; }
    this.store.dispatch( actions.crear({ text: this.txtInput.value }) );
    this.txtInput.reset();
  }
}
