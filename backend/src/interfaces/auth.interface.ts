
export interface ILogin {
  token: string
  email: string
  role: string
}

export interface IUser {
  email: string
  password: string
  _id?: string
}
