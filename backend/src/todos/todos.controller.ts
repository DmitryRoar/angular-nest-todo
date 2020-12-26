import {Body, Controller, Get, Post} from '@nestjs/common'
import {TodosService} from './todos.service'
import {TodoCreateDto} from './dto/todo-create.dto'
import {Todos} from './schemas/todos.schema'

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {
    }

    @Get()
    getAll() {
        return this.todosService.getAll()
    }

    @Post()
    create(@Body() todoCreate: TodoCreateDto): Promise<Todos> | {message: string} {
        if (todoCreate.title) {
            return this.todosService.create(todoCreate)
        }
        return {message: 'Empty Title'}
    }
}
