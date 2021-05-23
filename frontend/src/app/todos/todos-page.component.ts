import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Subscription} from 'rxjs'

import {TodosService} from '../shared/services/todos.service'
import {AlertService} from '../shared/services/alert.service'

import {ITodos} from '../shared/interfaces'
import {StorageName} from '../storage-name'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-todos',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit, OnDestroy {
  form: FormGroup
  loadTodos$: Subscription

  todos: ITodos[] | [] = []

  disabled = false
  loading: boolean
  theme: string

  constructor(
    private readonly todosService: TodosService,
    private route: ActivatedRoute,
    private readonly alert: AlertService
  ) {}

  ngOnInit(): void {
    this.loadTodos()
    if (localStorage.getItem(StorageName.Theme)) {
      this.theme = localStorage.getItem(StorageName.Theme) as string
    }

    this.route.queryParams.subscribe((params: Params) => {
      if (params.notAdmin) {
        this.alert.warning('Недостаточно прав')
      }
    })

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  loadTodos() {
    this.loading = true
    this.loadTodos$ = this.todosService.getAll().subscribe((todos: ITodos[]) => {
      this.loading = false
      this.todos = todos
    })
  }

  confirm(todo) {
    return this.todosService.update(todo).subscribe(() => {
      this.alert.success('Успешно Завершено')
    }, () => {
    }, () => {
      this.loadTodos()
    })
  }

  remove(id: string) {
    return this.todosService.remove(id).subscribe(() => {
      return this.alert.success('Успешно удалено')
    }, () => {
      this.alert.danger()
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
      this.alert.danger('Пустое поле "Todo"')
      this.disabled = false
      return
    }

    const data: ITodos = {
      title,
      date: new Date().toJSON(),
      confirm: false
    }

    this.todosService.create(data).subscribe(() => {
      this.form.reset()
      this.alert.success('Успешно добавлено!')
      this.disabled = false
    }, () => {
      this.form.reset()
      this.alert.danger()
      this.disabled = false
    }, () => {
      this.loadTodos()
    })
  }

  ngOnDestroy(): void {
    if (this.loadTodos$) {
      this.loadTodos$.unsubscribe()
    }
  }
}
