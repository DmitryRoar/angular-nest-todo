import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core'
import {ITodos} from '../../shared/interfaces'

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodosListComponent {
  @Input() todos: ITodos[] | []
  @Output() onConfirm = new EventEmitter<ITodos>()
  @Output() onRemove = new EventEmitter<string>()

  constructor() {}

  confirm(todo: ITodos) {
    const newTodo: ITodos = {
      ...todo,
      confirm: true
    }
    this.onConfirm.emit(newTodo)
  }

  remove(id: string) {
    this.onRemove.emit(id)
  }
}
