import { UserActions } from '../types/user'

export default class actions implements UserActions {
    // 声明this的属性
    loginAction(this: { name: string, password: string}, payload: { name: string, password: string }): void {
        this.name = payload.name
        this.password = payload.password
    }
}
