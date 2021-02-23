import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'

import {AuthService} from './auth.service'
import {AuthController} from './auth.controller'
import {Auth, AuthSchema} from './schemas/auth.schema'
import {JwtStrategy} from './strategies/jwt.strategy'

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Auth.name, schema: AuthSchema
    }])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {
}
