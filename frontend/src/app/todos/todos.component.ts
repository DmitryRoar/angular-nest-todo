import {Component, Input, Output, EventEmitter} from '@angular/core'

import {ITodos} from '../shared/interfaces'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos: ITodos[] | []
  @Output() onConfirm = new EventEmitter<ITodos>()

  constructor() {}

  confirm(todo: ITodos) {
    const newTodo: ITodos = {
      ...todo,
      confirm: true
    }
    this.onConfirm.emit(newTodo)
  }
}
