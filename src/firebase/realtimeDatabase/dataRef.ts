import { ref } from 'firebase/database'
import { database } from './database'

export const dataRef = (refName: string) => {
  return ref(database, refName)
}
