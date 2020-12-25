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
    const data: ITodos = {
      title: this.form.value.title,
      date: new Date().toJSON(),
      confirm: false
    }

    this.appService.create(data).subscribe()
    this.loadTodos()
  }
}
