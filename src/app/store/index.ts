import { create } from 'zustand'
import { createCounterSlice, CounterSlice } from './counter'
import { createDataFetchSlice, DataFetchSlice } from './dataFetch'

export const useStore = create<CounterSlice & DataFetchSlice>((...a) => ({
  ...createCounterSlice(...a),
  ...createDataFetchSlice(...a),
}))