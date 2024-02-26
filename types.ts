export type RootStackParamList = {
  Question: undefined
  LeaderBoard: undefined
}

export interface IQuestion {
  question: string
  A: string
  B: string
  C: string
  D: string
  answer: string
}

export interface IUser {
  id: number
  name: string
  score: number
}

export type Choice = 'A' | 'B' | 'C' | 'D'
