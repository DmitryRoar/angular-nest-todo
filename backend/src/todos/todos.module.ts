import {Module} from '@nestjs/common'
import {TodosService} from './todos.service'
import {TodosController} from './todos.controller'
import {MongooseModule} from '@nestjs/mongoose'
import {Todos, TodosSchema} from './schemas/todos.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Todos.name, schema: TodosSchema
    }])
  ],
  providers: [TodosService],
  controllers: [TodosController]
})
export class TodosModule {}
