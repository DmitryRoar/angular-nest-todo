import {Types} from 'mongoose'

export class ConfirmTodoDto {
  readonly title: string
  readonly date: string
  readonly confirm: boolean
  readonly _id?: Types.ObjectId
}
