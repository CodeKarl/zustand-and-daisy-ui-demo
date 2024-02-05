import { StateCreator } from 'zustand'

export interface DataFetchSlice {
  dataFetch: {
    data: string | null
    isLoading: boolean
    error: string
    fetchData: () => void
    clearData: () => void
  }
}

export const initialState: DataFetchSlice = {
  dataFetch: {
    data: null,
    isLoading: false,
    error: '',
    fetchData: () => { },
    clearData: () => { },
  }
}

export const createDataFetchSlice: StateCreator<
  DataFetchSlice,
  [],
  [],
  DataFetchSlice
> = (set) => ({
  dataFetch: {
    ...initialState.dataFetch,
    fetchData: async () => {
      set((state) => ({ dataFetch: { ...state.dataFetch, error: '' } }))
      set((state) => ({ dataFetch: { ...state.dataFetch, isLoading: true } }))

      try {
        // Wait for 3 seconds before fetching the data
        await new Promise(resolve => setTimeout(resolve, 3000))

        const response: any = await fetch('https://pokeapi.co/api/v2/berry/1')
        const data = await response.json()
        set((state) => ({
          dataFetch: {
            ...state.dataFetch,
            data: data,
            isLoading: false
          }
        }))

      } catch (error) {
        const message: string = error instanceof Error ? error.message : 'Unknown error'
        set((state) => ({
          dataFetch: {
            ...state.dataFetch,
            data: null,
            error: message,
            isLoading: false,
          }
        }))
      }
    },
    clearData: () => set((state) => ({
      dataFetch: {
        ...state.dataFetch,
        data: initialState.dataFetch.data,
        error: initialState.dataFetch.error
      }
    })),
  }
})