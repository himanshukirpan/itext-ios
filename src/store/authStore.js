// store.js
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create(
    persist(
        (set) => ({
            data: {
                login: false,
                user: null
            },
            hasHydrated: false,
            setHasHydrated: (val) => set({hasHydrated: val}),
            setLogin: (val) =>
                set((state) => ({
                    data: {...state.data, login: val},
                })),
            setUser: (user) =>
                set((state) => ({
                    data: {...state.data, user},
                })),
            reset: () =>
                set(() => ({
                    data: {login: false, user: null},
                })),
        }),
        {
            name: 'auth-storage-1',
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                state.setHasHydrated(true); // mark hydrated after load
            },
        }
    )
);
