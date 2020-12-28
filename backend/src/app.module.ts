import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'

import {TodoModule} from './todo/todo.module'

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://roar:zxc123@cluster0.f8p0k.mongodb.net/todos')
  ]
})
export class AppModule {
}
