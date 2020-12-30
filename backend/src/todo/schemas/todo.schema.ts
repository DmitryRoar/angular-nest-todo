import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type TodoDocument = Todo & Document

@Schema()
export class Todo {
  @Prop({required: true})
  title: string

  @Prop({required: true})
  date: string

  @Prop({required: true})
  confirm: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
