import {createSlice} from '@reduxjs/toolkit'

interface IRequestsState {
    count: number;
}

const initialState: IRequestsState = {
    count: 0
}

export const requestsSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        increaseCount: (state) => {
            state.count++;
        },
        decreaseCount: (state) => {
            state.count--;
        },
    },
})
