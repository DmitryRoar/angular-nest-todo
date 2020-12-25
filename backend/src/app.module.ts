import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'

import {TodosService} from './todos/todos.service'
import {TodosController} from './todos/todos.controller'
import {TodosModule} from './todos/todos.module'

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot('mongodb+srv://roar:zxc123@cluster0.f8p0k.mongodb.net/todos')
  ]
})
export class AppModule {
}
