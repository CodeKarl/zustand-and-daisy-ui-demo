import { StateCreator } from 'zustand'

export interface DataFetchSlice {
  data: string | null
  isLoading: boolean
  error: string
  fetchData: () => void
  clearData: () => void
}

export const initialState: DataFetchSlice = {
  data: null,
  isLoading: false,
  error: '',
  fetchData: () => { },
  clearData: () => { },
}

export const createDataFetchSlice: StateCreator<
  DataFetchSlice,
  [],
  [],
  DataFetchSlice
> = (set) => ({
  ...initialState,
  fetchData: async () => {
    set({ isLoading: true })

    try {
      // Wait for 3 seconds before fetching the data
      await new Promise(resolve => setTimeout(resolve, 3000))

      const response: any = await fetch('https://pokeapi.co/api/v2/berry/1')
      const data = await response.json()
      set({ data, isLoading: false })
    } catch (error) {
      const message: string = error instanceof Error ? error.message : 'Unknown error'
      set({ error: message, isLoading: false })
    }
  },
  clearData: () => set({ data: initialState.data }),
})