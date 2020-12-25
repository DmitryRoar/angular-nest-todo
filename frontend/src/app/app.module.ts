import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component';
import { TodosComponent } from './todos/todos.component'

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
