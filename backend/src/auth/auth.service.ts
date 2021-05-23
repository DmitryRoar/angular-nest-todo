import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {ConfigService} from '@nestjs/config'

import {Model} from 'mongoose'
import {compare, hash} from 'bcrypt'
import * as jwt from 'jsonwebtoken'

import {Auth, AuthDocument} from './schemas/auth.schema'

import {CreateUserDto} from './dto/create-user.dto'
import {LoginUserDto} from './dto/login-user.dto'
import {ILogin} from '../interfaces/auth.interface'
import {ITodoSession} from '../interfaces/todo.interface'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
    private readonly configService: ConfigService
  ) {
  }

  async getUsersLength(): Promise<number> {
    return await this.authModel.countDocuments()
  }

  getAllUsers() {
    return this.authModel.find()
  }

  async signUp(createDto: CreateUserDto): Promise<Auth> {
    const candidate = await this.authModel.findOne({email: createDto.email})
    if (candidate) {
      throw new HttpException('Пользователь уже зарегистрирован', HttpStatus.CONFLICT)
    }
    const data = {
      ...createDto,
      password: await hash(createDto.password, 10),
      date: new Date().toLocaleDateString(),
      rule: createDto.role.toLowerCase()
    }
    const user = await new this.authModel(data)
    return await user.save()
  }

  async login(session: ITodoSession, loginDto: LoginUserDto): Promise<ILogin | Error> {
    const candidate = await this.authModel.findOne({email: loginDto.email})
    if (candidate) {
      const isMatch = await compare(loginDto.password, candidate.password)
      if (!isMatch) {
        throw new HttpException('Разные пороли', HttpStatus.UNAUTHORIZED)
      }

      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id
        },
        this.configService.get<string>('jwtSecret'),
        {expiresIn: 60 * 60}
      )

      session.user = candidate
      await candidate.save()

      return {token, email: candidate.email, role: candidate.role}
    }

    throw new HttpException('Пользователь не найден', HttpStatus.FORBIDDEN)
  }

  logout(session: any) {
    session.destroy(err => {
      if (err) {
        console.log('[LOGOUT ERROR: ]', err)
        return
      }
    })
  }
}
