import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'

import {AlertService} from '../../shared/services/alert.service'
import {AuthService} from '../shared/services/auth.service'
import {IUser} from '../shared/interfaces'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup

  disabled = false

  constructor(
    readonly alert: AlertService,
    readonly auth: AuthService,
    readonly router: Router
  ) {}

  ngOnInit(): void {
    const passwordValidation = [
      Validators.minLength(6),
      Validators.required
    ]

    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', passwordValidation),
      rPassword: new FormControl('', passwordValidation)
    })
  }

  onSubmit() {
    this.disabled = true
    const {email, password, rPassword} = this.form.value
    if (password !== rPassword) {
      this.disabled = false
      this.alert.danger('Разные пороли')
      return this.form.patchValue({
        password: '',
        rPassword: ''
      })

    }

    const user: IUser = {
      email,
      password
    }

    return this.auth.signUp(user).subscribe(() => {
      this.router.navigate(['auth', 'login'])
      this.alert.success('Аккаунт успешно зарегестрирован!')
      this.form.reset()
      this.disabled = false
    }, () => {
      this.alert.danger('Аккаунт уже зарегистроравн')
      this.form.reset()
      this.disabled = false
    })
  }
}
