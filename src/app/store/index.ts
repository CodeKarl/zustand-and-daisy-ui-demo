import { create } from 'zustand'
import { createCounterSlice, CounterSlice } from './counter'

export const useStore = create<CounterSlice>((...a) => ({
  ...createCounterSlice(...a),
}))