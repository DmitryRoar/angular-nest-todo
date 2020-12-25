import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {ITodos} from './shared/interfaces'

@Injectable({providedIn: 'root'})
export class AppService {
  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<ITodos[] | []> {
    return this.http.get<ITodos[] | []>(`/api/todos`)
  }

  create(todo: ITodos): Observable<ITodos> {
    return this.http.post<ITodos>(`/api/todos`, todo)
  }
}
