import UserStore from './user/index'
import { UserActions } from './types/user'

const user = new UserStore()

// 定义仓库类型
export interface StoreType {
    user: UserActions 
}

const stores: StoreType = {
    user,
}

export default stores
