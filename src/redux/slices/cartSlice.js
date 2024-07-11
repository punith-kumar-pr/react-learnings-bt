import { createSlice, createSelector } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
            // console.log(action.payload)
        },
        removeItem : (state, action) => {
            console.log(action.payload)
            return state.filter(item => item.id !== action.payload.id)
        },
    }
})

export const getItemSelector = createSelector(
    state => state.cart,
    state => state
)

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;