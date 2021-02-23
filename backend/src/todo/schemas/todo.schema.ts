import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Document, Types} from 'mongoose'

export type TodoDocument = Todo & Document

@Schema()
export class Todo {
  @Prop({required: true})
  title: string

  @Prop({required: true})
  date: string

  @Prop({required: true})
  confirm: boolean

  @Prop({required: true})
  owner: Types.ObjectId
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
