import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        updateCart: (state, data) => {
            state.cart.push(data.payload)
            // console.log('data', data)
            // state.cart = [...state.cart, data.payload]
        },
        removeFromCart: (state) => {

        }
    }
})

export const { updateCart, removeFromCart } = cartSlice.actions

export default cartSlice
