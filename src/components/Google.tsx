import { memo } from 'react'
import { googleAuthProvider } from '../firebase/auth/googleAuthProvider'
import { useGlobal } from '../hooks/useGlobal'
import Button from './parts/Button'
const Google = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()

  return (
    <div id="google-auth" className="flex items-center my-2">
      <span>Google Auth</span>
      <Button onClick={() => handleSocialMediaAuthClick(googleAuthProvider)}>
        Google
      </Button>
    </div>
  )
})

export default Google
