import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthLayoutComponent} from './shared/components/auth-layout/auth-layout.component'
import {AuthGuard} from './shared/guards/auth.guard'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignupComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
