import UserStore from './user/index'
import { UserActions, UserState } from './types/user'

const user = new UserStore()

// 定义仓库类型
export interface StoreType {
    user: UserActions & UserState
}

const stores: StoreType = {
    user
}

export default stores