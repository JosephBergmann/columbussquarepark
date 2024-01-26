import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loaded: false
}


export const fetchAll = createAsyncThunk(
    'allData/getAllData',
    async (thunkAPI) => {
        try {
            const res = await fetch("/api/getAllData")
            if (res.ok) {
                const data = await res.json()
                return data
            }
        } catch (err) {
            const data = await err.json()
            return data
        }
    }
)

const allDataSlice = createSlice({
    name: 'allData',
    initialState,
    reducers: {
        // loadData: (state, action) => {
        //     state.loaded = true
        // },
        // removeData: (state, action) => {
        //     state.loaded = false
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAll.fulfilled, (state) => {
            state.loaded = true
        });
    }
})

export default allDataSlice.reducer
