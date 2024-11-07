import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdding(state, action: PayloadAction<Product>) {
            console.log(action.payload);

            console.log(current(state));
            
            state.push(action.payload);
        },
    },
})


// Export the actions and reducer
export const { cartAdding } = cartSlice.actions;
export default cartSlice.reducer;