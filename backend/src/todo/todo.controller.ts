import {Body, Controller, Get, Patch, Post} from '@nestjs/common'
import {TodoService} from './todo.service'
import {CreateTodoDto} from './dto/create-todo.dto'
import {Todo} from './schemas/todo.schema'
import {ConfirmTodoDto} from './dto/confirm-todo.dto'

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

  @Patch()
  confirm(@Body() id: ConfirmTodoDto): Promise<Todo> {
    return this.todoService.confirm(id)
  }
}
