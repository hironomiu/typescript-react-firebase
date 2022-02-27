import { firebaseApp } from '../initializeApp'
import { getDatabase, ref } from 'firebase/database'

const database = getDatabase(firebaseApp)

export const dataRef = (refName: string) => {
  return ref(database, refName)
}
