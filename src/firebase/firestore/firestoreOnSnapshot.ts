import { onSnapshot, query, collection } from 'firebase/firestore'
import { firestore } from './firestoreRef'
import { FirestoreMessage } from '../../types'

export const firestoreOnSnapshot = (ref: string, setFirestoreMessages: any) => {
  const q = query(collection(firestore, ref))
  const data: FirestoreMessage[] = []
  const unsub = onSnapshot(q, (snapshot) => {
    snapshot.forEach((doc: any) => {
      console.log(doc.id)
      data.push({
        key: doc.id,
        name: doc.data().name,
        text: doc.data().text,
        createdAt: doc.data().createdAt,
        updatedAt: doc.data().updatedAt,
      })
      setFirestoreMessages([...data])
    })
  })
  return unsub
}
