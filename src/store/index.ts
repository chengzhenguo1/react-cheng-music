import React from 'react'
import User from './user/index'

const stores = React.createContext({
    User: new User(),
})

export default stores
