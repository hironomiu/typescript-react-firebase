import { doc, updateDoc } from 'firebase/firestore'
import { firestore } from './firestoreRef'
export const firestoreUpdate = async (data: any) => {
  console.log('data:', data)
  await updateDoc(doc(firestore, 'messages/' + data.key), {
    name: 'hohoho',
  })
}
