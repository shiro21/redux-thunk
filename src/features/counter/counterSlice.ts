import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    data: [],
    error: null
}

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchUserById = createAsyncThunk("users/fetchById", async() => {
    const response = await fetch(POSTS_URL)
    const data = await response.json();
    return data
})

export const counterSlice = createSlice({
    name: "counter",
    // createSlice는 initialState인수에서 상태 유형을 추론합니다.
    initialState,
    // 동기적인 작업
    reducers: {
        increment: (state) => {
            
        },
        decrement: (state) => {
            
        },
        // PayloadAction유형을 사용해서 action.payload의 내용을 선언합니다.
        incrementByAmount: (state, action: PayloadAction<number>) => {
            
        },
    },
    // 비 동기적인 작업
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserById.pending, (state, action) => {
            state.status = "Loading ...";
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
            state.status = "Success";
            state.data = action.payload;
        })
        .addCase(fetchUserById.rejected, (state, action) => {
            state.status = "Error";
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer