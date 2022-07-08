import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { firestore } from './firestoreRef'

export const firestoreAddDoc = async ({
  refName,
  name,
  text,
}: {
  refName: string
  name: string
  text: string
}) => {
  try {
    const docRef = await addDoc(collection(firestore, refName), {
      name: name,
      text: text,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    console.log('Doc ID:', docRef.id)
  } catch (e) {
    console.log('error:', e)
  }
}
