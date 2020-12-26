import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {AlertService} from '../../services/alert.service'
import {IAlert} from '../../interfaces'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  aSub: Subscription

  text: string
  type: string

  @Input() delay = 5000

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.aSub = this.alertService.alert$.subscribe((alert: IAlert) => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }


  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}
