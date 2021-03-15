// user/user.ts
import { makeAutoObservable } from 'mobx'

import { applyMixins } from '@/utils/mixins'
import { UserState, UserActions } from '../types/user'
import actions from './actions'




class UserStore implements UserState, UserActions {
    // state
    name = 'asad'
    password = ''

    constructor() {
        // 观察全部数据
        makeAutoObservable(this)
    }
    // getter
    get userInfo() {
        return this.name + '' + this.password
    }

    // action
    loginAction(this: { name: string, password: string }, payload: { name: string; password: string; }): void { }
}


applyMixins(UserStore, [actions])

export default UserStore