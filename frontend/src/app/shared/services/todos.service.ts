import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {ITodos, ITodosError} from '../interfaces'

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<ITodos[] | []> {
    return this.http.get<ITodos[]>(`/api/todos`)
  }

  create(todo: ITodos): Observable<ITodos | ITodosError> {
    return this.http.post<ITodos>(`/api/todos`, todo)
  }

  update(todo: ITodos): Observable<ITodos> {
    return this.http.put<ITodos>(`/api/todos`, todo)
  }
}
