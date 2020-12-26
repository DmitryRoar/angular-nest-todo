// TODOS

export interface ITodos {
  title: string
  date: string
  confirm: boolean
}

export interface ITodosError {
  message: string
}

// ALERT
type AlertType = 'success' | 'warning' | 'danger'

export interface IAlert {
  type: AlertType
  text: string
}
