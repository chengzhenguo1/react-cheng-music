// user/user.ts
import { makeAutoObservable } from 'mobx'
import { ILoginResult } from '../../api/types/auth'

class User {
    // 登录框的显示与隐藏
    showLoginDialog = false
    // 用户信息
    user:ILoginResult = {}
    isLogin = false

    constructor() {
        makeAutoObservable(this)
        const user = window.sessionStorage.getItem('user')
        if (user) {
            this.user = JSON.parse(user)
            this.isLogin = true
        }
    }
    // 登录框的显示与隐藏
    changeDiaLogShow(isShow:boolean):void {
        this.showLoginDialog = isShow
    }

    // 保存登录信息
    loginUser(data:ILoginResult):void {
        this.user = data
        window.sessionStorage.setItem('user', JSON.stringify(this.user))
        this.isLogin = true
        this.showLoginDialog = false
    }

    logoutUser():void {
        this.user = {}
        window.sessionStorage.removeItem('user')
        this.isLogin = false
    }
}

export default User
