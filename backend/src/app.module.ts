import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigModule} from '@nestjs/config'
import configuration from './configuration'

import {TodoModule} from './todo/todo.module'
import {AuthModule} from './auth/auth.module'
import {DashboardModule} from './dashboard/dashboard.module'

@Module({
  imports: [
    TodoModule,
    AuthModule,
    DashboardModule,
    MongooseModule.forRoot('mongodb+srv://roar:zxc123@cluster0.f8p0k.mongodb.net/application', {
      useFindAndModify: true
    }),
    ConfigModule.forRoot({
      load: [configuration],
      ignoreEnvFile: true,
      isGlobal: true
    })
  ]
})
export class AppModule {
}
