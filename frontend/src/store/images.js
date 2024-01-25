import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    images: {}
}

export const addImage = createAsyncThunk(
    'images/add',
    async (image, thunkAPI) => {
        try {
            const res = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    image
                })
            })
            if (response.ok) {
                data = await res.json()
                return data
            }
        } catch (err) {
            data = await err.json()
            return data
        }
    }
)

export const removeImage = createAsyncThunk(
    'images/remove',
    async (image, thunkAPI) => {
        try {
            const res = await fetch("", {
                method: "DELETE",
            })
            if (response.ok) {
                data = await res.json()
                return data
            }
        } catch (err) {
            data = await err.json()
            return data
        }
    }
)

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        // addImage: (state, action) => {
        //     state.images[action.payload.id] = action.payload
        // },
        // removeImage: (state, action) => {
        //     delete state.images[action.payload.id]
        // }
    },
    extraReducers: (builder) => {
        builder.addCase('allData/getAllData', (state, action) => {
            state.images = action.payload.images
        });

        builder.addCase(addImage.fulfilled, (state, action) => {
            state.images[action.payload.id] = action.payload
        });

        builder.addCase(removeImage.fulfilled, (state, action) => {
            delete state.images[action.payload.id]
        });
    }
})

export default imageSlice.reducer
// export const { addImage, removeImage } = imageSlice.actions
