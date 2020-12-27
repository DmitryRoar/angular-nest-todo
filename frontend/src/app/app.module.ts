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

import {registerLocaleData} from '@angular/common'
import ruLocale from '@angular/common/locales/ru'

registerLocaleData(ruLocale)

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoaderComponent,
    AlertComponent,
    ToggleThemeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
