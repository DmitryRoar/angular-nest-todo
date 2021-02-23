import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

import {IAlert} from '../interfaces'

@Injectable()
export class AlertService {
  alert$ = new Subject<IAlert>()

  success(text: string): void {
    this.alert$.next({type: 'success', text})
  }

  warning(text: string): void {
    this.alert$.next({type: 'warning', text})
  }

  danger(text = 'Что-то пошло не так. Попробуйте попытку позже'): void {
    this.alert$.next({type: 'danger', text})
  }
}
