import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params, Router} from '@angular/router'

import {AuthService} from '../shared/services/auth.service'
import {AlertService} from '../../shared/services/alert.service'

import {ILogin} from '../shared/interfaces'
import {StorageName} from '../../storage-name'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  disabled = false

  constructor(
    private readonly auth: AuthService,
    private readonly alert: AlertService,
    private router: Router,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.alert.danger('Для продолжения необходимо Авторизоваться')
      }
    })
  }

  onSubmit() {
    this.disabled = true
    const {email, password} = this.form.value

    this.auth.login({email, password}).subscribe((data: ILogin) => {
      this.router.navigate(['/'])
      localStorage.setItem(StorageName.Token, data.token)
      this.disabled = false
    }, () => {
      this.disabled = false
    })
  }
}
