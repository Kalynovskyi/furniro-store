import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdding(state, action: PayloadAction<Product>) {
            // Example mutation; here, we update only the title

            state.push(action.payload);

            // You can perform additional mutations here
        },
    },
})

// export default function cartReducer( state: Product = initialState, action: PayloadAction<Product>) {
//     switch (action.type) {
//         case 'cart/cartAdding': {
//             state.title = 'loading'
//             return state
//         }
//         default:
//             return state;
//     }
// }

// Export the actions and reducer
export const { cartAdding } = cartSlice.actions;
export default cartSlice.reducer;