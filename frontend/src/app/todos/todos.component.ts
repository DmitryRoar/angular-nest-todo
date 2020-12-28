import {Component, Input, OnInit} from '@angular/core'
import {ITodos} from '../shared/interfaces'
import {TodosService} from '../shared/services/todos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: ITodos[] | []
  confirmTodo = false

  constructor(private readonly todosService: TodosService) { }

  ngOnInit(): void {
  }

  confirm(todo) {
    return this.todosService.confirm(todo._id).subscribe(() => {
      this.confirmTodo = true
    })
  }
}
