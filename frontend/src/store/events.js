import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    events: {}
}

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events[action.payload.id] = action.payload
        },
        updateEvent: (state, action) => {
            state.events[action.payload.id] = action.payload
        },
        removeEvent: (state, action) => {
            delete state.events[action.payload.id]
        }
    }
})

export default eventSlice.reducer
export const { addEvent, updateEvent, removeEvent } = eventSlice.actions
