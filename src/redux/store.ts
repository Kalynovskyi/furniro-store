import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import filterReducer from './features/shop-filter/filterSlice'
import paginationReducer from './features/shop-pagination/paginationSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            cartReducer,
            filterReducer,
            paginationReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']