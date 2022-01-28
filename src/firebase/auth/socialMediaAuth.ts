import { firebaseApp } from '../initializeApp'
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const socialMediaAuth = async (
  provider: GithubAuthProvider | TwitterAuthProvider | GoogleAuthProvider
) => {
  const user = await signInWithPopup(auth, provider).then((result) => {
    return result.user
  })
  return user
}
