import { firebaseApp } from '../initializeApp'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const emailPasswordAuth = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password).then(
    (result) => {
      return result.user
    }
  )
  return user
}
