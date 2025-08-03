// store.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter-storage', // unique name
      getStorage: () => AsyncStorage, // use AsyncStorage in React Native
    }
  )
);
