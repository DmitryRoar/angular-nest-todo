import {NestFactory} from '@nestjs/core'
import {NestExpressApplication} from '@nestjs/platform-express'

import * as session from 'express-session'
import * as connectStore from 'connect-mongodb-session'

import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.setGlobalPrefix('api')

  const MongoStore = connectStore(session)

  const store = new MongoStore({
    collection: 'sessions',
    uri: 'mongodb+srv://roar:zxc123@cluster0.f8p0k.mongodb.net/application'
  })

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      store
    })
  )
  await app.listen(4000)
}


bootstrap()
