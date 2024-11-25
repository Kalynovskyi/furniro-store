import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: ShopFilterState = {
    productsAmount: 16,
    minPrice: null,
    maxPrice: null,
    rating: null,
    sizes: null,
    colors: null,
    categories: [],
    tags: null,
    sort: 'default'
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterChange(state, action: PayloadAction<ShopFilterState>) {
            const currentState = current(state);
            //console.log(action.payload.categories![0]);

            if (action.payload.categories !== undefined) {

                if (state.categories?.includes(action.payload.categories![0])) return;

                state.categories?.push(action.payload.categories![0])
            }

            //state.categories = action.payload.categories ?? currentState.categories;

            state.productsAmount = action.payload.productsAmount ?? currentState.productsAmount;
            state.minPrice = action.payload.minPrice ?? currentState.minPrice;
            state.maxPrice = action.payload.maxPrice ?? currentState.maxPrice;
            state.rating = action.payload.rating ?? currentState.rating;
            state.sizes = action.payload.sizes ?? currentState.sizes;
            state.colors = action.payload.colors ?? currentState.colors;
            state.tags = action.payload.tags ?? currentState.tags;
            state.sort = action.payload.sort ?? currentState.sort;
        },

        filterRemove(state, action: PayloadAction<ShopFilterState>) {
            const currentState = current(state);
            console.log(action.payload.categories![0]);

            if (action.payload.categories !== undefined) {
                const categoryIndex = state.categories?.indexOf(action.payload.categories![0]);
                
                state.categories?.splice(categoryIndex!, 1)
            }
        },
    },
});

// Export the actions and reducer
export const { filterChange, filterRemove } = filterSlice.actions;
export default filterSlice.reducer;
