import {Body, Controller, Get, Post, Put} from '@nestjs/common'
import {Todo} from './schemas/todo.schema'

import {TodoService} from './todo.service'

import {ConfirmTodoDto} from './dto/confirm-todo.dto'
import {CreateTodoDto} from './dto/create-todo.dto'


@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get()
  getAll() {
    return this.todoService.getAll()
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto)
  }

  @Put()
  confirm(@Body() todo: ConfirmTodoDto): Promise<Todo> {
    return this.todoService.update(todo)
  }
}
