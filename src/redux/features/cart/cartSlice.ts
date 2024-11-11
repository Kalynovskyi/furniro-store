import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: CartProduct[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartAdding(state, action: PayloadAction<CartProduct>) {
            const currentState = current(state);

            const isDuplicate = currentState.filter(
                (item) => item.product.id === action.payload.product.id
            );

            if (isDuplicate.length) {
                alert("Product already in the bin");
                return;
            }

            state.push(action.payload);
        },

        cartRemove(state, action: PayloadAction<Product>) {
            return state.filter((item) => (item.product.id !== action.payload.id))
        }
    },
});

// Export the actions and reducer
export const { cartAdding } = cartSlice.actions;
export default cartSlice.reducer;
