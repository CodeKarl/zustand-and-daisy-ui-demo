import { StateCreator } from 'zustand'

export interface CounterSlice {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
  resetCount: () => void
}

export const initialState: CounterSlice = {
  count: 0,
  increaseCount: () => { },
  decreaseCount: () => { },
  resetCount: () => { },
}

export const createCounterSlice: StateCreator<
  CounterSlice,
  [],
  [],
  CounterSlice
> = (set) => ({
  ...initialState,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: initialState.count }),
})