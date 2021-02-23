import {ITodos} from './general.interface'

export interface ILogin {
  token: string
}

export interface IUser {
  email: string
  password: string
  _id?: string
}
