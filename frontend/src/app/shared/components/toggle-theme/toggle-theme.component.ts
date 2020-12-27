import {Component, EventEmitter, OnInit, Output} from '@angular/core'

type Theme = 'light' | 'dark' | ''

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit {
  @Output() onTheme: any = new EventEmitter<Theme>()

  theme: Theme = ''
  storageTheme = localStorage.getItem('user-theme') as Theme

  constructor() {
  }

  ngOnInit(): void {
    if (this.storageTheme) {
      this.theme = this.storageTheme
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
    this.onTheme.emit(this.theme)
    localStorage.setItem('user-theme', this.theme)
  }
}
