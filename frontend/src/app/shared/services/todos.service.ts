import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {Observable, throwError} from 'rxjs'
import {catchError, share} from 'rxjs/operators'

import {AlertService} from './alert.service'

import {ITodos, ITodosError} from '../interfaces'

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(
    private http: HttpClient,
    private readonly alert: AlertService,
    private router: Router
    ) {}

  getAll(): Observable<ITodos[] | undefined> {
    return this.http.get<ITodos[] | undefined>(`/api/todos`)
      .pipe(
        share(),
        catchError(this.httpErrorHandler.bind(this))
      )
  }

  create(todo: ITodos): Observable<ITodos | ITodosError> {
    return this.http.post<ITodos>(`/api/todos`, todo)
  }

  update(todo: ITodos): Observable<ITodos> {
    return this.http.put<ITodos>(`/api/todos`, todo)
  }

  remove(id: string): Observable<ITodos> {
    return this.http.delete<ITodos>(`/api/todos/${id}`)
  }

  private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error.statusCode === 409) {
      this.router.navigate(['/auth', 'login'], {
        queryParams: {
          loginAgain: true
        }
      })
    }

    return throwError(error)
  }
}
