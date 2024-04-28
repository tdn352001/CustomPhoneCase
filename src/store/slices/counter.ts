import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state
interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

// Create the counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export default counterSlice
