
export interface UserActions {
    loginAction: (this: { name: string, password: string }, payload: { name: string, password: string }) => void
}

export interface UserState {
    name: string
    password: string
    userInfo: string
}
