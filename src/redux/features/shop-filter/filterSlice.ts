import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

const initialState: ShopFilterState = {
	productsAmount: 16,
	minPrice: null,
	maxPrice: null,
	rating: null,
	sizes: [],
	colors: [],
	categories: [],
	tags: null,
	sort: "default",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterAdding(state, action: PayloadAction<ShopFilterState>) {
			const currentState = current(state);

			if (action.payload.categories !== undefined) {
				//In case of duplicates exit condition
				if (state.categories?.includes(action.payload.categories![0])) return;

				state.categories?.push(action.payload.categories![0]);
			}

			if (action.payload.sizes !== undefined) {
				//In case of duplicates exit condition
				if (state.sizes?.includes(action.payload.sizes![0])) return;

				state.sizes?.push(action.payload.sizes![0]);
			}

			if (action.payload.colors !== undefined) {
				//In case of duplicates exit condition
				if (state.colors?.includes(action.payload.colors![0])) return;

				state.colors?.push(action.payload.colors![0]);
			}

			//state.categories = action.payload.categories ?? currentState.categories;

			state.productsAmount = action.payload.productsAmount ?? currentState.productsAmount;
			state.minPrice = action.payload.minPrice ?? currentState.minPrice;
			state.maxPrice = action.payload.maxPrice ?? currentState.maxPrice;
			// state.rating = action.payload.rating ?? currentState.rating;
			// state.colors = action.payload.colors ?? currentState.colors;
			// state.tags = action.payload.tags ?? currentState.tags;
			// state.sort = action.payload.sort ?? currentState.sort;
		},

		filterRemove(state, action: PayloadAction<ShopFilterState>) {
			if (action.payload.categories !== undefined) {
				const categoryIndex = state.categories?.indexOf(action.payload.categories![0]);

				state.categories?.splice(categoryIndex!, 1);
			}

			if (action.payload.sizes !== undefined) {
				const sizeIndex = state.sizes?.indexOf(action.payload.sizes![0]);

				state.sizes?.splice(sizeIndex!, 1);
			}

			if (action.payload.colors !== undefined) {
				const sizeIndex = state.colors?.indexOf(action.payload.colors![0]);

				state.colors?.splice(sizeIndex!, 1);
			}
		},
	},
});

// Export the actions and reducer
export const { filterAdding, filterRemove } = filterSlice.actions;
export default filterSlice.reducer;
