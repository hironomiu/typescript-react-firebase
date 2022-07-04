import { memo } from 'react'
import { githubAuthProvider } from '../firebase/auth/githubAuthProvider'
import { useGlobal } from '../hooks/useGlobal'
import Button from './parts/Button'
const GitHub = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="github-auth" className="flex items-center my-2">
      <span>GitHub Auth</span>
      <Button onClick={() => handleSocialMediaAuthClick(githubAuthProvider)}>
        GitHub
      </Button>
    </div>
  )
})

export default GitHub
