import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {GeneralModule} from '../general.module'

import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component'
import {AuthService} from './shared/services/auth.service'

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignupComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeneralModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    AuthLayoutComponent
  ],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AuthModule {
}
