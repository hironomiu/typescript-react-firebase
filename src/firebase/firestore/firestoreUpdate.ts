import { doc, updateDoc } from 'firebase/firestore'
import { firestore } from './firestoreRef'
export const firestoreUpdate = async (data: any) => {
  await updateDoc(doc(firestore, 'messages/' + data.key), {
    name: data.name,
    text: data.text,
  })
}
