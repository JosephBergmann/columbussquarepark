import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    galleryImageIds: []
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase('allData/getAllData', (state, action) => {
            state.galleryImageIds = action.payload.galleryImageIds
        });

        builder.addCase('images/add', (state, action) => {
            if (action.payload.gallery === true){
                state.galleryImageIds.push(action.payload.id)
            }
        });

        builder.addCase('images/remove', (state, action) => {
            const index = state.galleryImageIds.indexOf(action.payload)
            if (index !== -1) {
                state.galleryImageIds.splice(index, 1)
            }
        })
    }
})

export default gallerySlice.reducer
