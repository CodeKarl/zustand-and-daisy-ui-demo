import { StateCreator } from 'zustand'

export interface CounterSlice {
  counter: {
    count: number
    increaseCount: () => void
    decreaseCount: () => void
    resetCount: () => void
  }
}

export const initialState: CounterSlice = {
  counter: {
    count: 0,
    increaseCount: () => { },
    decreaseCount: () => { },
    resetCount: () => { },
  }
}

export const createCounterSlice: StateCreator<
  CounterSlice,
  [],
  [],
  CounterSlice
> = (set) => ({
  counter: {
    ...initialState.counter,
    increaseCount: () => set((state) => ({ counter: { ...state.counter, count: state.counter.count + 1 } })),
    decreaseCount: () => set((state) => ({ counter: { ...state.counter, count: state.counter.count - 1 } })),
    resetCount: () => set((state) => ({ counter: { ...state.counter, count: initialState.counter.count } })),
  }
})