import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: ShopFilterState = {
    productsAmount: 16,
    minPrice: null,
    maxPrice: null,
    rating: null,
    sizes: null,
    colors: null,
    categories: null,
    tags: null,
    sort: 'default'
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterChange(state, action: PayloadAction<ShopFilterState>) {
            const currentState = current(state);

            state.productsAmount = action.payload.productsAmount ?? currentState.productsAmount;
            state.minPrice = action.payload.minPrice ?? currentState.minPrice;
            state.maxPrice = action.payload.maxPrice ?? currentState.maxPrice;
            state.rating = action.payload.rating ?? currentState.rating;
            state.sizes = action.payload.sizes ?? currentState.sizes;
            state.colors = action.payload.colors ?? currentState.colors;
            state.categories = action.payload.categories ?? currentState.categories;
            state.tags = action.payload.tags ?? currentState.tags;
            state.sort = action.payload.sort ?? currentState.sort;
        },
    },
});

// Export the actions and reducer
export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
