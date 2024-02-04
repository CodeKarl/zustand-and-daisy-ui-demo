import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state: any) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state: any) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 })
}))