import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {TodosComponent} from './todos/todos.component'

import {registerLocaleData} from '@angular/common'
import ruLocale from '@angular/common/locales/ru'
registerLocaleData(ruLocale)

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
