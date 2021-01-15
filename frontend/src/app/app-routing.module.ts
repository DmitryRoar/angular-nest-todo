import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {AuthLayoutComponent} from './auth/shared/components/auth-layout/auth-layout.component'
import {TodosComponent} from './todos/todos.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/'},
      {path: '', component: TodosComponent}
    ]
  },
  {path: 'auth', component: AuthLayoutComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
