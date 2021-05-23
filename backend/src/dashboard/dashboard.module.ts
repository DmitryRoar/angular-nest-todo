import {Module} from '@nestjs/common'

import {AuthModule} from '../auth/auth.module'
import {TodoModule} from '../todo/todo.module'

import {DashboardController} from './dashboard.controller'

@Module({
  imports: [AuthModule, TodoModule],
  controllers: [DashboardController]
})
export class DashboardModule {
}
