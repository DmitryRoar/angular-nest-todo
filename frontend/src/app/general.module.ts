import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'

import {NavbarComponent} from './shared/components/navbar/navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent
  ]
})
export class GeneralModule {}
