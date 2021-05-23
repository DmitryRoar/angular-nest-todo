import {Controller, Get} from '@nestjs/common'

import {AuthService} from '../auth/auth.service'
import {TodoService} from '../todo/todo.service'

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly authService: AuthService,
    private readonly todoService: TodoService
  ) {
  }

  @Get('users')
  getUsersLength() {
    return this.authService.getUsersLength()
  }

  @Get('todos')
  getTodosLength() {
    return this.todoService.getTodosLength()
  }

  @Get('info')
  async getInfoLength(): Promise<any> {
    const usersLength = await this.authService.getUsersLength()
    const todosLength = await this.todoService.getTodosLength()
    return {todos: todosLength, users: usersLength}
  }
}
