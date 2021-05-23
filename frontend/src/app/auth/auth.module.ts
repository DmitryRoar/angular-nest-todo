import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from '../shared/shared.module'
import {AuthRoutingModule} from './auth-routing.module'

import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component'
import {AuthService} from './shared/services/auth.service'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    AuthLayoutComponent
  ],
  providers: [AuthService],
  exports: []
})
export class AuthModule {
}
