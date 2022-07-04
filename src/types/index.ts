export type User = {
  nickname: string
  email: string
}

export type Message = {
  key: string
  name: string
  text: string
}

export type RealTimeDatabaseEntries = [string, { name: string; text: string }]
