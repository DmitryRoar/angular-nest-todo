import {Component, Input, OnInit} from '@angular/core'
import {ITodos} from '../shared/interfaces'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: ITodos[] | []

  constructor() { }

  ngOnInit(): void {
  }

}
