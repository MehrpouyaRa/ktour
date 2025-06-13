import { create } from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import authServicesTypes from '../endpoints/auth/type'

type states = {
    states: {
        hasHydrated: boolean
        data: authServicesTypes | null
    }
    actions: {
        update_data(v: states['states']['data']): void
        update_hydrated(v: states['states']['hasHydrated']): void
    }
}

const useAppStore = create<states>()(
    devtools(
        persist(
            (set) => ({
                states: {
                    hasHydrated: false,
                    data: null,
                },
                actions: {
                    update_data: (v) => set(states => ({ ...states, states: { ...states.states, data: v } })),
                    update_hydrated: (v) => set(states => ({ ...states, states: { ...states.states, hasHydrated: v } })),
                },
            }),
            {
                name: 'dekemond',
                storage: createJSONStorage(() => localStorage),
                partialize: states => ({
                    states: {
                        data: states.states.data
                    }
                })
            },
        ),
        {
            enabled: process.env.NODE_ENV === 'development',
            name: 'dekemond'
        }
    )
)

export default useAppStore