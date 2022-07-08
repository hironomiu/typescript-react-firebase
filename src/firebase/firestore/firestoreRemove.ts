import { doc, deleteDoc } from 'firebase/firestore'
import { firestore } from './firestoreRef'
export const firestoreRemove = async (key: string) => {
  await deleteDoc(doc(firestore, 'messages/' + key))
}
