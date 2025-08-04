// store.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
