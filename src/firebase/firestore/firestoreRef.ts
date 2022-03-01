import { firebaseApp } from '../initializeApp'
import { getFirestore } from 'firebase/firestore'

export const firestore = getFirestore(firebaseApp)
