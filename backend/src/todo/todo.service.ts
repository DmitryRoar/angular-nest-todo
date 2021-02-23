import {ConflictException, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'

import {Model} from 'mongoose'

import {Todo, TodoDocument} from './schemas/todo.schema'
import {CreateTodoDto} from './dto/create-todo.dto'
import {ConfirmTodoDto} from './dto/confirm-todo.dto'
import {RemoveTodoDto} from './dto/remove-todo.dto'

import {IUser} from '../interfaces/auth.interface'
import {ITodoSession} from '../interfaces/todo.interface'
import {ITodos} from '../interfaces/general.interface'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModal: Model<TodoDocument>) {
  }

  async getAll(session: ITodoSession): Promise<ITodos[] | undefined> {
    const candidate: IUser = session.user

    if (!candidate) {
      throw new ConflictException('Проблемы с сессией. Авторизуйтесь снова')
    }

    return await this.todoModal.find({owner: candidate._id}).exec()
  }

  async create(session: ITodoSession, todo: CreateTodoDto): Promise<Todo> {
    const data = {
      ...todo,
      owner: session.user._id
    }
    const newTodo = await new this.todoModal(data)
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
