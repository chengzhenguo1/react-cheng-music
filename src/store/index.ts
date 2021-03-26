import React from 'react'
import User from './user/index'
import Music from './music/index'

const stores = React.createContext({
    User: new User(),
    Music: new Music(),
})

export default stores
