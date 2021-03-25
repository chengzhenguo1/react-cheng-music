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
    }
    // 登录框的显示与隐藏
    changeDiaLogShow(isShow:boolean):void {
        this.showLoginDialog = isShow
    }

    // 保存登录信息
    loginUser(data:ILoginResult):void {
        this.user = data
        this.isLogin = true
        this.showLoginDialog = false
    }

    logoutUser():void {
        this.user = {}
        this.isLogin = false
    }
}

export default User
