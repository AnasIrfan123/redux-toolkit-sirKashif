import { combineReducers } from 'redux'
import themeSlice from './themeSlice'
import userSlice from './userSlice'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({
    themeReducer: themeSlice.reducer,
    userReducer: userSlice.reducer,
    cartReducer: cartSlice.reducer
})

export default rootReducer