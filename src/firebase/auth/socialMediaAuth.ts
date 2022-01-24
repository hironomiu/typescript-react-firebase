import { firebaseApp } from '../initializeApp'
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
} from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const socialMediaAuth = async (
  provider: GithubAuthProvider | TwitterAuthProvider
) => {
  const user = await signInWithPopup(auth, provider).then((result) => {
    return result.user
  })
  return user
}
