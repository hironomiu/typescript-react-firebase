import { firestore } from './firestoreRef'
import { getDocs, collection } from 'firebase/firestore'

export const firestoreGetDoc = async () => {
  // const docRef = doc(firestore, 'messages')
  const docSnap = await getDocs(collection(firestore, 'messages'))
  return docSnap
}
