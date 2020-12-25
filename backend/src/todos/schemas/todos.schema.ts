import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type TodosDocument = Todos & Document

@Schema()
export class Todos {
  @Prop({required: true})
  title: string

  @Prop({required: true})
  date: Date

  @Prop({required: true})
  confirm: boolean
}

export const TodosSchema = SchemaFactory.createForClass(Todos)
