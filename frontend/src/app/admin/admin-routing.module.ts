import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {AdminGuard} from './shared/guards/admin.guard'

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component'
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component'
import {UsersPageComponent} from './users-page/users-page.component'
import {TodosPageComponent} from './todos-page/todos-page.component'

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivateChild: [AdminGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'todos', component: TodosPageComponent},
      {path: 'users', component: UsersPageComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
