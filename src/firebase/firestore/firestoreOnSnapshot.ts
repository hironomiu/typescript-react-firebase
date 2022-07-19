import { onSnapshot, query, collection } from 'firebase/firestore'
import { firestore } from './firestoreRef'
import { FirestoreMessage } from '../../types'

export const firestoreOnSnapshot = (ref: string, setFirestoreMessages: any) => {
  const q = query(collection(firestore, ref))
  let data: FirestoreMessage[] = []
  const unsub = onSnapshot(q, (snapshot) => {
    snapshot.forEach((doc: any) => {
      data.push({
        key: doc.id,
        name: doc.data().name,
        text: doc.data().text,
        createdAt: doc.data().createdAt,
        updatedAt: doc.data().updatedAt,
      })
    })
    setFirestoreMessages((prev: FirestoreMessage[]) => (prev = [...data]))
    data = []
  })
  return unsub
}
