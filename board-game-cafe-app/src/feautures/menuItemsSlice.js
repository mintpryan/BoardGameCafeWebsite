import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetcher } from '../helpers/axios';

export const fetchMenuItems = createAsyncThunk('items/fetchMenuItems', async (_, { getState }) => {
    const state = getState();
    const selectedItem = state.category.selectedItem;
    if (selectedItem) {
        const response = await fetcher(`menu/category/${selectedItem.key}/menu-item/`);
        
        return response.data;;
    }
    throw new Error('No item selected');
});

const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState: {
        items: [],
        selectedItem: null,
        status: 'idle',
        error: null
    },
    reducers: {
        selectItem: (state, action) => {
            state.selectedItem = state.items.find((item) => item.key === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { selectItem } = menuItemsSlice.actions;
export const menuItemsSelector = (state) => state.menuItems.items;
export const menuItemSelector = (state) => state.menuItems.selectedItem;
export const categoryStatus = (state) => state.menuItems.status;
export const categoryError = (state) => state.menuItems.error;

export default menuItemsSlice.reducer;