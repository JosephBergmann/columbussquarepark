import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loaded: false
}

const fetchAll = createAsyncThunk(
    'allData/getAllData',
    async (images) => {

    }
)

const allDataSlice = createSlice({
    name: 'allData',
    initialState,
    reducers: {
        loadData: (state, action) => {
            state.loaded = true
        },
        removeData: (state, action) => {
            state.loaded = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAll.fulfilled, (state) => {
            state.loaded = true
        });
    }
})

export default imageSlice.reducer
export const { addImage, removeImage } = imageSlice.actions
