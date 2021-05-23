import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'

import {AuthService} from './auth.service'
import {AuthController} from './auth.controller'
import {Auth, AuthSchema} from './schemas/auth.schema'
import {JwtStrategy} from './strategies/jwt.strategy'
import {DashboardModule} from '../dashboard/dashboard.module'

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Auth.name, schema: AuthSchema
    }])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {
}
