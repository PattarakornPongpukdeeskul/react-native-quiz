import { create } from 'zustand'

import type { IUser } from 'types'

interface UserStore extends IUser {
  increaseScore: () => void
  join: (name: string) => void
}

export const useUserStore = create<UserStore>()((set) => ({
  id: 0,
  name: '',
  score: 0,
  join: (name: string) => set(() => ({ name })),
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
}))
