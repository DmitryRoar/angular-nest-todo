import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {NavbarComponent} from './components/navbar/navbar.component'
import {AlertComponent} from './components/alert/alert.component'
import {AlertService} from './services/alert.service'

@NgModule({
  declarations: [
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AlertService],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    AlertComponent
  ]
})
export class SharedModule {}
