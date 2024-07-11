
import { configureStore, } from '@reduxjs/toolkit';
import categoryReducer from '../feautures/categorySlice'
import menuItemsReduser from '../feautures/menuItemsSlice'
import eventReduser from '../feautures/eventSlice'

const store = configureStore({
    reducer: {
        category:categoryReducer,
        menuItems:menuItemsReduser,
        event:eventReduser,
    }
});

export default store;