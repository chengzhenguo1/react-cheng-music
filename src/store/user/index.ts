// user/user.ts
import { makeAutoObservable } from 'mobx'

import { applyMixins } from '../../utils/mixins'
import { UserState, UserActions, UserGetter } from '../types/user'
import actions from './actions'

class UserStore implements UserState, UserActions, UserGetter {
    // state
    name = 'asad'
    password = ''

    constructor() {
        // 观察全部数据
        makeAutoObservable(this)
    }
    // getter
    get userInfo():string {
        return `${this.name}${this.password}`
    }

    // action
     /* eslint-disable-next-line */
    loginAction(this: { name: string, password: string }, payload: { name: string; password: string; }): void { }
}

applyMixins(UserStore, [actions])

export default UserStore
