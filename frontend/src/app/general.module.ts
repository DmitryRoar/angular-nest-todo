import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

import {NavbarComponent} from './shared/components/navbar/navbar.component'
import {AlertComponent} from './shared/components/alert/alert.component'
import {AlertService} from './shared/services/alert.service'

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
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    AlertComponent
  ]
})
export class GeneralModule {}
