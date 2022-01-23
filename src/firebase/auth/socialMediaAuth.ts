import { firebaseApp } from '../initializeApp'
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const auth = getAuth(firebaseApp)

export const socialMediaAuth = async (provider: GithubAuthProvider) => {
  const user = await signInWithPopup(auth, provider).then((result) => {
    return result.user
  })
  return user
}
