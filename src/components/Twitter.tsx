import { memo } from 'react'
import { twitterAuthProvider } from '../firebase/auth/twitterAuthProvider'
import { useGlobal } from '../hooks/useGlobal'
import Button from './parts/Button'

const Twitter = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="twitter-auth" className="flex items-center my-2">
      <span>Twitter Auth</span>
      <Button onClick={() => handleSocialMediaAuthClick(twitterAuthProvider)}>
        Twitter
      </Button>
    </div>
  )
})

export default Twitter
