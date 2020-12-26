import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {AppService} from './app.service'
import {ITodos} from './shared/interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup
  todos: ITodos[] | [] = []

  btnDisabled: boolean

  constructor(
    private readonly appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.loadTodos()

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }

  loadTodos() {
    return this.appService.getAll().subscribe((todos: ITodos[]) => {
      this.todos = todos
    })
  }

  onSubmit(): void {
    this.btnDisabled = true
    const title: string = this.form.value.title

    if (title) {
      this.btnDisabled = false
    } else {
      this.btnDisabled = true

    }

    const data: ITodos = {
      title,
      date: new Date().toJSON(),
      confirm: false
    }

    this.appService.create(data).subscribe(() => {
      this.form.reset()
    }, () => {
      this.btnDisabled = false
      this.form.reset()
    })
    this.loadTodos()
  }
}
