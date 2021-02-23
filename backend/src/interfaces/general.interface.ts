import {Request} from 'express'
import {IUser} from './auth.interface'

export interface ITodos {
  title: string
  date: string
  confirm: boolean
  _id?: string
}

interface IReqLogin {
  session: {
    user: IUser
    todos?: ITodos
  }
}

export type IReqType = IReqLogin & Request
