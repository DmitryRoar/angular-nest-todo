import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

import {IAlert} from '../interfaces'

@Injectable({providedIn: 'root'})
export class AlertService {
  alert$ = new Subject<IAlert>()

  success(text: string) {
    this.alert$.next({type: 'success', text})
  }

  warning(text: string) {
    this.alert$.next({type: 'warning', text})
  }

  danger(text = 'Что-то пошло не так. Попробуйте попытку позже') {
    this.alert$.next({type: 'danger', text})
  }
}
