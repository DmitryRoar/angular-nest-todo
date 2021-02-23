import {AfterContentInit, Component} from '@angular/core'

import {StorageName} from '../../../storage-name'
import {AuthService} from '../../../auth/shared/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterContentInit {
  isAuth: boolean

  constructor(private readonly auth: AuthService) {}

  ngAfterContentInit(): void {
    this.isAuth = !!localStorage.getItem(StorageName.Token)
  }

  logout() {
    localStorage.removeItem(StorageName.Token)
    this.auth.logout().subscribe()
  }
}
