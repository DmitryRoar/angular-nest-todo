import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ITodos} from '../shared/interfaces'
import {TodosService} from '../shared/services/todos.service'
import {AlertService} from '../shared/services/alert.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {
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
    this.loading = true
    return this.todosService.getAll().subscribe((todos: ITodos[]) => {
      this.loading = false
      this.todos = todos
    }, () => {
      this.alertService.danger()
    })
  }

  confirm(todo) {
    return this.todosService.update(todo).subscribe(() => {
      this.alertService.success('Успешно Завершено')
    }, () => {
    }, () => {
      this.loadTodos()
    })
  }

  remove(id: string) {
    return this.todosService.remove(id).subscribe(() => {
      return this.alertService.success('Успешно удалено')
    }, () => {
      this.alertService.danger()
    }, () => {
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
      this.alertService.danger()
    }, () => {
      this.loadTodos()
    })
  }
}
