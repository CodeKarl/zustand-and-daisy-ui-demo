import { create } from 'zustand'
import { createCounterSlice, CounterSlice } from './counter'
import { createDataFetchSlice, DataFetchSlice } from './dataFetch'

export const useStore = create<CounterSlice & DataFetchSlice>((...a) => ({
  // TODO: Add namespaces to slices
  // EXAMPLE: 
  // counter: ...createCounterSlice(...a),
  // https://github.com/pmndrs/zustand/discussions/1538
  // That's what we call namespacing slices, which is more advanced.
  // Some third party libraries support namespacing. For example: zustand-lens in https://github.com/pmndrs/zustand/blob/3c03e40f93e20eb28ab50fc84a7e64af92bf63c5/docs/integrations/third-party-libraries.md
  // https://github.com/dhmk083/dhmk-zustand-lens
  // https://github.com/pmndrs/zustand/issues/178 This is a issue that discusses namespacing
  ...createCounterSlice(...a),
  ...createDataFetchSlice(...a),
}))