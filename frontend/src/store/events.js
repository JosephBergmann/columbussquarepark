import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const addEvent = createAsyncThunk(
    'events/add',
    async (event, thunkAPI) => {
        const res = await fetch("/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event
            })
        })
        if (res.ok) {
            const data = await res.json()
            return data
        } else {
            const data = await res.json()
            return data
        }
    }
)

export const updateEvent = createAsyncThunk(
    'events/update',
    async (event, thunkAPI) => {
        const res = await fetch(`/api/events/${event.id}/edit`, {
            method: "UPDATE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                event
            })
        })
        if (res.ok) {
            const data = await res.json()
            return data
        } else {
            const data = await res.json()
            return data
        }

    }
)

export const removeEvent = createAsyncThunk(
    'events/remove',
    async (eventId, thunkAPI) => {
        const res = await fetch(`/api/events/${eventId}`, {
            method: "DELETE",
        })
        if (res.ok) {
            const data = await res.json()
            return data
        } else {
            const data = await res.json()
            return data
        }
    }
)

const eventSlice = createSlice({
    name: 'events',
    initialState: {},
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
            state = action.payload.events
        });

        builder.addCase(addEvent.fulfilled, (state, action) => {
            console.log('state', state)
            console.log('action', action)

            state[action.payload.event.id] = action.payload.event
        });

        builder.addCase(updateEvent.fulfilled, (state, action) => {
            state[action.payload.event.id] = action.payload
        });

        builder.addCase(removeEvent.fulfilled, (state, action) => {
            delete state[action.payload.event.id]
        });
    }
})

export default eventSlice.reducer
// export const { addEvent, updateEvent, removeEvent } = eventSlice.actions
