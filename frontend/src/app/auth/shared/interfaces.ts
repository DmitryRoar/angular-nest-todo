export interface IUser {
  email: string
  password: string
  role?: string
}

export interface ILogin {
  email: string
  role: string
  token: string
}
