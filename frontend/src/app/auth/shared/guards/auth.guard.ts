import {Injectable} from '@angular/core'
import {CanActivate, CanActivateChild, Router} from '@angular/router'

import {AlertService} from '../../../shared/services/alert.service'

import {StorageName} from '../../../storage-name'

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private readonly alert: AlertService
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem(StorageName.Token)) {
      return true
    } else {
      this.router.navigate(['/auth', 'login']).then(() => {
        this.alert.danger('Для продолжения необходимо авторизоваться')
      })
      return false
    }
  }

  canActivateChild(): boolean {
    if (localStorage.getItem(StorageName.Token)) {
      this.router.navigate(['/']).then(() => {
        this.alert.danger('Недоступно')
      })
      return false
    }
    return true
  }
}
