import {Body, Controller, Delete, Get, Param, Post, Put, Session} from '@nestjs/common'
import {Todo} from './schemas/todo.schema'

import {TodoService} from './todo.service'

import {ConfirmTodoDto} from './dto/confirm-todo.dto'
import {CreateTodoDto} from './dto/create-todo.dto'
import {RemoveTodoDto} from './dto/remove-todo.dto'

import {ITodoSession} from '../interfaces/todo.interface'
import {ITodos} from '../interfaces/general.interface'

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {
  }

  @Get()
  getAll(@Session() session: ITodoSession): Promise<ITodos[] | undefined> {
    return this.todoService.getAll(session)
  }

  @Post()
  create(@Session() session: ITodoSession, @Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(session, createTodoDto)
  }

  @Put()
  confirm(@Body() todo: ConfirmTodoDto): Promise<Todo> {
    return this.todoService.update(todo)
  }

  @Delete(':id')
  remove(@Param('id') id: RemoveTodoDto): Promise<Todo> {
    return this.todoService.remove(id)
  }
}
