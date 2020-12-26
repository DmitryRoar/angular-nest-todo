import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {TodosService} from "./shared/services/todos.service";

import {ITodos, ITodosError} from './shared/interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup
  todos: ITodos[] | [] = []

  loading: boolean

  constructor(
    private readonly todosService: TodosService
  ) {
  }

  ngOnInit(): void {
    this.loadTodos()

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }

  loadTodos() {
    this.loading = false
    return this.todosService.getAll().subscribe((todos: ITodos[]) => {
      this.loading = true
      this.todos = todos
    })
  }

  onSubmit(): void {
    const title: string = this.form.value.title

    const data: ITodos = {
      title,
      date: new Date().toJSON(),
      confirm: false
    }

    this.todosService.create(data).subscribe((response: ITodosError & ITodos) => {
      if (response.message) {
        // alert.service
      } else {
        this.form.reset()
        this.loadTodos()
      }
    }, () => {

      this.form.reset()
    })
  }
}
