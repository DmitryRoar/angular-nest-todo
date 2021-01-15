import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {TodosComponent} from './todos/todos.component'
import {LoaderComponent} from './shared/components/loader/loader.component'
import {ToggleThemeComponent} from './shared/components/toggle-theme/toggle-theme.component'
import {AlertComponent} from './shared/components/alert/alert.component'

import {TodosService} from './shared/services/todos.service'

import {FindTodoPipe} from './shared/pipes/find-todo.pipe'

import {registerLocaleData} from '@angular/common'
import ruLocale from '@angular/common/locales/ru';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthModule} from './auth/auth.module';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'
import {RouterModule} from '@angular/router'
import {AppRoutingModule} from './app-routing.module'

registerLocaleData(ruLocale)

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoaderComponent,
    AlertComponent,
    ToggleThemeComponent,
    FindTodoPipe,
    TodosListComponent,
    MainLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
