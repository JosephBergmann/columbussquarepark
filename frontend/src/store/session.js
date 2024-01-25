import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    user: null
}

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export default sessionSlice.reducer
export const { login, logout } = sessionSlice.actions
