import { firebaseApp } from '../initializeApp'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export const firestore = getFirestore(firebaseApp)

export const test = async () => {
  try {
    const docRef = await addDoc(collection(firestore, 'messages'), {
      name: 'hoge',
      text: 'hello world',
    })
    console.log('Doc ID:', docRef.id)
  } catch (e) {
    console.log('error:', e)
  }
}
