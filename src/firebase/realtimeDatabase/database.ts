import { firebaseApp } from '../initializeApp'
import { getDatabase } from 'firebase/database'

export const database = getDatabase(firebaseApp)
