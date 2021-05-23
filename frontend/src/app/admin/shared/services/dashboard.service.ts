import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {IInfoLength} from '../interfaces/dashboard.interface'

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  getInfoLength(): Observable<IInfoLength> {
    return this.http.get<IInfoLength>('/api/dashboard/info')
  }
}
