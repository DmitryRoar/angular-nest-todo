import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {TodosService} from "./shared/services/todos.service";

import {ITodos, ITodosError} from './shared/interfaces'
import {AlertService} from './shared/services/alert.service'

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
    private readonly todosService: TodosService,
    private readonly alertService: AlertService
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
        this.alertService.danger(response.message)
      } else {
        this.alertService.success('Add Todo!')
        this.form.reset()
        this.loadTodos()
      }
    }, () => {
      this.form.reset()
    })
  }
}
