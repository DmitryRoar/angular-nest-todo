import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {TodosService} from './shared/services/todos.service'

import {ITodos} from './shared/interfaces'
import {AlertService} from './shared/services/alert.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup

  todos: ITodos[] | [] = []

  disabled = false
  loading: boolean
  theme: string

  constructor(
    private readonly todosService: TodosService,
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.loadTodos()
    if (localStorage.getItem('user-theme')) {
      this.theme = localStorage.getItem('user-theme') as string
    }

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

  confirm(todo) {
    return this.todosService.update(todo).subscribe(() => {
      this.alertService.success('Успешно Завершено')
    }, () => {}, () => {
      this.loadTodos()
    })
  }

  toggleTheme(theme) {
    this.theme = theme
  }

  onSubmit(): void {
    this.disabled = true
    const title = String(this.form.value.title)
    if (!title.trim() || title.trim() === 'null') {
      this.alertService.danger('Пустое поле "Todo"')
      this.disabled = false
      return
    }

    const data: ITodos = {
      title,
      date: new Date().toJSON(),
      confirm: false
    }

    this.todosService.create(data).subscribe(() => {
      this.disabled = false
      this.form.reset()
      this.alertService.success('Успешно добавлено!')
    }, () => {
      this.form.reset()
    }, () => {
      this.loadTodos()
    })
  }
}
