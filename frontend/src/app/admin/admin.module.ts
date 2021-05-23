import {NgModule} from '@angular/core'

import {AdminRoutingModule} from './admin-routing.module'
import {SharedModule} from '../shared/shared.module'

import {AdminGuard} from './shared/guards/admin.guard'

import {DashboardService} from './shared/services/dashboard.service'

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component'

import {DashboardPageComponent} from './dashboard-page/dashboard-page.component'
import {SidebarComponent} from './shared/components/sidebar/sidebar.component'
import {TodosPageComponent} from './todos-page/todos-page.component'
import {UsersPageComponent} from './users-page/users-page.component'

@NgModule({
  declarations: [
    DashboardPageComponent,
    AdminLayoutComponent,
    SidebarComponent,
    TodosPageComponent,
    UsersPageComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    AdminGuard,
    DashboardService
  ]
})
export class AdminModule {
}
