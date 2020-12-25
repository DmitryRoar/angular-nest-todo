import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'

import {Todos, TodosDocument} from './schemas/todos.schema'
import {TodoCreateDto} from './dto/todo-create.dto'

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todos.name) private todosModal: Model<TodosDocument>) {
  }

  async getAll(): Promise<Todos[] | []> {
    return await this.todosModal.find().exec()
  }

  async create(todo: TodoCreateDto): Promise<Todos> {
    const newTodo = await new this.todosModal(todo)
    return await newTodo.save()
  }
}
