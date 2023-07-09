import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "/src/const";

export const fetchColors = createAsyncThunk(
    'colors/fetchColors',
    async () => {
        const response = await fetch(COLORS_URL)
        const data = await response.json();
        return data;
    }
)

const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        currentColor: '',
        colorsList: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setCurrentColor: (state, action) => {
            state.currentColor = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchColors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchColors.fulfilled, (state, action) => {
                state.status = 'success';
                state.colorsList = action.payload;
                console.log(state.colorsList);
            })
            .addCase(fetchColors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export const { setCurrentColors } = colorsSlice.actions;

export default colorsSlice.reducer;