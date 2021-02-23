import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'

import {AlertService} from '../../../shared/services/alert.service'

import {ILogin, IUser} from '../interfaces'

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private alert: AlertService
  ) {}

  signUp(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(`/api/auth/sign-up`, data)
  }

  login(data: IUser): Observable<ILogin> {
    return this.http.post<ILogin>(`/api/auth/login`, data)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  logout(): Observable<void> {
    return this.http.get<void>(`/api/auth/logout`)
  }

  private errorHandler(error: HttpErrorResponse) {
    const status = error.error.statusCode

    switch (status) {
      case 403: this.alert.danger('Не зарегестрирован')
        break
      case 401: this.alert.danger('Неверный логин и пароль')
        break
      case 500: this.alert.danger('Проблемы с сервервами. Попробуйте попытку позже')
        break
    }

    return throwError(error)
  }
}
