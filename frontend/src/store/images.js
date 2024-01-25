import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    images: {}
}

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage: (state, action) => {
            state.images[action.payload.id] = action.payload
        },
        removeImage: (state, action) => {
            delete state.images[action.payload.id]
        }
    }
})

export default imageSlice.reducer
export const { addImage, removeImage } = imageSlice.actions
