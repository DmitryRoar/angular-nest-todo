import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'

import {Todo, TodosDocument} from './schemas/todo.schema'
import {CreateTodoDto} from './dto/create-todo.dto'
import {ConfirmTodoDto} from './dto/confirm-todo.dto'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todosModal: Model<TodosDocument>) {
  }

  async getAll(): Promise<Todo[] | []> {
    return await this.todosModal.find().exec()
  }

  async create(todo: CreateTodoDto): Promise<Todo> {
    const newTodo = await new this.todosModal(todo)
    return await newTodo.save()
  }

  async update(todo: ConfirmTodoDto): Promise<Todo> {
    const newTodo = await this.todosModal.findByIdAndUpdate(todo._id, todo)
    return await newTodo.save()
  }
}
