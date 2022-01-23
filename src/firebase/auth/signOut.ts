import { firebaseApp } from '../initializeApp'
import { getAuth } from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const signOut = async () => {
  const res = await auth.signOut()
  return res
}
