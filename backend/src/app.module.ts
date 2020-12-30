import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
// import {ServeStaticModule} from '@nestjs/serve-static'

import {TodoModule} from './todo/todo.module'

// import {join} from 'path'

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://roar:zxc123@cluster0.f8p0k.mongodb.net/todos', {
      useFindAndModify: true
    })
    // ,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', 'frontend')
    // })
  ]
})
export class AppModule {
}
