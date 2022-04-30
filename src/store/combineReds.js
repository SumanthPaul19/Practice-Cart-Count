import {combineReducers} from 'redux'
import menuReducer from './reducers/menuReducer'
import cartReducer from './reducers/cartReducer'

const reducers=combineReducers({
    menuReducer:menuReducer,
    cartReducer:cartReducer
})

export default reducers;