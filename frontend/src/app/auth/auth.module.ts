import {NgModule} from '@angular/core'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {CommonModule} from '@angular/common'

@NgModule({
  imports: [CommonModule],
  declarations: [SignupComponent, LoginComponent]
})
export class AuthModule {}
