import {NgModule} from '@angular/core'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {CommonModule} from '@angular/common';
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = []

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupComponent, LoginComponent, AuthLayoutComponent]
})
export class AuthModule {}
