import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    events: {}
}

export const addEvent = createAsyncThunk(
    'events/add',
    async (event, thunkAPI) => {
        try {
            const res = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    event
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

export const updateEvent = createAsyncThunk(
    'events/update',
    async (event, thunkAPI) => {
        try {
            const res = await fetch("", {
                method: "UPDATE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    event
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

export const removeEvent = createAsyncThunk(
    'events/remove',
    async (event, thunkAPI) => {
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

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        // addEvent: (state, action) => {
        //     state.events[action.payload.id] = action.payload
        // },
        // updateEvent: (state, action) => {
        //     state.events[action.payload.id] = action.payload
        // },
        // removeEvent: (state, action) => {
        //     delete state.events[action.payload.id]
        // }
    },
    extraReducers: (builder) => {
        builder.addCase('allData/getAllData', (state, action) => {
            state.events = action.payload.events
        });

        builder.addCase(addEvent.fulfilled, (state, action) => {
            state.events[action.payload.id] = action.payload
        });

        builder.addCase(updateEvent.fulfilled, (state, action) => {
            state.events[action.payload.id] = action.payload
        });

        builder.addCase(removeEvent.fulfilled, (state, action) => {
            delete state.events[action.payload.id]
        });
    }
})

export default eventSlice.reducer
// export const { addEvent, updateEvent, removeEvent } = eventSlice.actions
