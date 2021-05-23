import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type AuthDocument = Auth & Document

@Schema()
export class Auth {
  @Prop({required: true})
  email: string

  @Prop({required: true})
  password: string

  @Prop({required: true})
  date: string

  @Prop({required: true})
  role: string
}

export const AuthSchema = SchemaFactory.createForClass(Auth)
