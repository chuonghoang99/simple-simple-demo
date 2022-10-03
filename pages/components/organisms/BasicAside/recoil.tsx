import { atom, selector } from 'recoil'

export const system = atom<'agt' | 'tkn'>({
    key: 'system',
    default: 'agt',
})

export const changeSystem = selector({
    key: 'systemSelector',
    get: ({ get }) => {
        return get(system)
    },

    set: ({ set }, newValue) => set(system, newValue),
})
