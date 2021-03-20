export interface UserState {
    name: string
    password: string
}
export interface UserActions {
    /* eslint-disable-next-line */
    loginAction: (this: { name: string, password: string}, payload: { name: string, password: string }) => void
}

export interface UserGetter {
    userInfo : string
}
