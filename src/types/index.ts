export type User = {
  nickname: string
  email: string
}

export type displayMessage = {
  key: string
  name: string
  text: string
}

export type Message = displayMessage & {
  createdAt?: number
  updatedAt?: number
}

export type FirestoreMessage = {
  key: string
  name: string
  text: string
  // TODO: 型
  createdAt: any
  updatedAt: any
}

export type RealTimeDatabaseEntries = [string, Message]
