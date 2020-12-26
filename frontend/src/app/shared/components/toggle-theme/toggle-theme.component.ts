import {Component, OnInit, Output, EventEmitter} from '@angular/core'

type Theme = 'light' | 'dark'

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit {
  @Output() temp = new EventEmitter<Theme>()

  theme: Theme = 'light'
  themeStorage = localStorage.getItem('user-theme') as Theme

  constructor() { }

  ngOnInit(): void {
    // if (this.themeStorage)
    // this.theme = this.themeStorage
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
    this.temp.emit(this.theme)
    // localStorage.setItem('user-theme', this.theme)
  }
}
