import {Component, OnInit} from '@angular/core'
import {DashboardService} from '../shared/services/dashboard.service'
import {IInfoLength} from '../shared/interfaces/dashboard.interface'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  infoLength: IInfoLength = {
    users: 0,
    todos: 0
  }

  constructor(private readonly dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.getInfoLength().subscribe((data: IInfoLength) => {
      this.infoLength = data
    })
  }

}
