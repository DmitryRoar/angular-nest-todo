import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'

import {AuthGuard} from './auth/shared/guards/auth.guard'

import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'

import {TodosPageComponent} from './todos/todos-page.component'
import {ErrorPageComponent} from './error-page/error-page.component'
import {DashboardPageComponent} from './admin/dashboard-page/dashboard-page.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: TodosPageComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
