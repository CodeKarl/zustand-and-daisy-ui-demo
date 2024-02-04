import { State } from ".";

interface BearsState {
  bears: number
  addBear: () => void
}

export const initialState: BearsState = {
  bears: 5,
  addBear: () => { },
}

export const createBearSlice = (set: any) => ({
  bears: 0,
  addBear: () => set((state: State) => ({ bears: state.bears.bears + 1 })),
})