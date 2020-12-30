import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'

import {Todo, TodoDocument} from './schemas/todo.schema'
import {CreateTodoDto} from './dto/create-todo.dto'
import {ConfirmTodoDto} from './dto/confirm-todo.dto'
import {RemoveTodoDto} from './dto/remove-todo.dto'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModal: Model<TodoDocument>) {
  }

  async getAll(): Promise<Todo[] | []> {
    return await this.todoModal.find().exec()
  }

  async create(todo: CreateTodoDto): Promise<Todo> {
    const newTodo = await new this.todoModal(todo)
    return await newTodo.save()
  }

  async update(todo: ConfirmTodoDto): Promise<Todo> {
    const updateTodo = await this.todoModal.findByIdAndUpdate(todo._id, todo)
    return await updateTodo.save()
  }

  async remove(id: RemoveTodoDto): Promise<Todo> {
    return this.todoModal.findByIdAndDelete(id)
  }
}
