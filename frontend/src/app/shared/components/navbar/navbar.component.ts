import {AfterContentInit, Component} from '@angular/core'

import {StorageName} from '../../../storage-name'
import {AuthService} from '../../../auth/shared/services/auth.service'
import {ILogin} from '../../../auth/shared/interfaces'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterContentInit {
  isAuth: boolean
  data: ILogin

  constructor(private readonly auth: AuthService) {}

  ngAfterContentInit(): void {
    this.isAuth = !!localStorage.getItem(StorageName.Token)
    this.data = JSON.parse(localStorage.getItem(StorageName.Data))
  }

  logout(): void {
    this.auth.logout().subscribe(() => {
      localStorage.removeItem(StorageName.Token)
      localStorage.removeItem(StorageName.Data)
    })
  }
}
