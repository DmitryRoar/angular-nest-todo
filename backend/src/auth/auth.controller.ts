import {Body, Controller, Get, Post, Session} from '@nestjs/common'

import {AuthService} from './auth.service'

import {Auth} from './schemas/auth.schema'

import {CreateUserDto} from './dto/create-user.dto'
import {LoginUserDto} from './dto/login-user.dto'
import {ILogin} from '../interfaces/auth.interface'
import {ITodoSession} from '../interfaces/todo.interface'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('sign-up')
  signUp(@Body() createDto: CreateUserDto): Promise<Auth> {
    return this.authService.signUp(createDto)
  }

  @Post('login')
  login(@Session() session: ITodoSession, @Body() loginDto: LoginUserDto): Promise<ILogin | Error> {
    return this.authService.login(session, loginDto)
  }

  @Get('logout')
  logout(@Session() session) {
    return this.authService.logout(session)
  }
}
