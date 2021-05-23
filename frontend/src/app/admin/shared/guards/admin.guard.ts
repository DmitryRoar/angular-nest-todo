import {Injectable} from '@angular/core'
import {CanActivateChild, Router} from '@angular/router'

import {AlertService} from '../../../shared/services/alert.service'

import {StorageName} from '../../../storage-name'

@Injectable()
export class AdminGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private readonly alert: AlertService
  ) {
  }

  canActivateChild(): boolean {
    const candidate = JSON.parse(localStorage.getItem(StorageName.Data))
    if (candidate.role !== 'admin') {
      this.router.navigate(['/'], {
        queryParams: {
          notAdmin: true
        }
      })
      return false
    } else {
      return true
    }
  }
}
