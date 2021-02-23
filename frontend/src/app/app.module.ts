import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AuthModule} from './auth/auth.module'
import {GeneralModule} from './general.module'

import {AppComponent} from './app.component'
import {TodosPageComponent} from './todos/todos-page.component'
import {LoaderComponent} from './shared/components/loader/loader.component'
import {ToggleThemeComponent} from './shared/components/toggle-theme/toggle-theme.component'
import {TodosListComponent} from './todos/todos-list/todos-list.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {ErrorPageComponent} from './error-page/error-page.component'

import {FindTodoPipe} from './shared/pipes/find-todo.pipe'

import {registerLocaleData} from '@angular/common'
import ruLocale from '@angular/common/locales/ru'

registerLocaleData(ruLocale)

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    LoaderComponent,
    ToggleThemeComponent,
    FindTodoPipe,
    TodosListComponent,
    MainLayoutComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
