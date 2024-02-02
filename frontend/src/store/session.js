import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// const initialState = {
//     user: null
// }

export const authenticate = createAsyncThunk(
    'session/authenticate',
    async (thunkAPI) => {
        const res = await fetch("/api/session")
        if (res.ok) {
            const data = await res.json()
            return data
        } else {
            const data = await res.json()
            return data
        }
    }
)

export const login = createAsyncThunk(
    'session/login',
    async (credentials, thunkAPI) => {
        const res = await fetch("/api/session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
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

export const logout = createAsyncThunk(
    'session/logout',
    async (thunkAPI) => {
        const res = await fetch("/api/session", {
            method: "DELETE"
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

const sessionSlice = createSlice({
    name: 'session',
    initialState: {user: null, errors: null},
    reducers: {
        // login: (state, action) => {
        //     state.user = action.payload
        // },
        // logout: (state) => {
        //     state.user = null
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(authenticate.fulfilled, (state, action) => {
            state.user = action.payload.user
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user || null
            state.errors = action.payload.errors || null
        })

        builder.addCase(logout.fulfilled, (state, action) => {
            state.user = null
        })

    }
})

export default sessionSlice.reducer
// export const { login, logout } = sessionSlice.actions
