import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetcher } from '../helpers/axios';


export const fetchCategories = createAsyncThunk('items/fetchCategories', async () => {
    const response = await fetcher('menu/category/');
    return response.data;
});

const categorySlice = createSlice({
    name: 'category',
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
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { selectItem } = categorySlice.actions;
export const categoriesSelector = (state) => state.category.items;
export const categorySelector = (state) => state.category.selectedItem;
export const categoryStatus = (state) => state.category.status;
export const categoryError = (state) => state.category.error;

export default categorySlice.reducer;