import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PaginationState = {
    page: 1
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        pageChange(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
    },
});

// Export the actions and reducer
export const { pageChange } = paginationSlice.actions;
export default paginationSlice.reducer;
