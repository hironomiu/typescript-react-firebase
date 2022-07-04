import { memo } from 'react'
import { twitterAuthProvider } from '../firebase/auth/twitterAuthProvider'
import { useGlobal } from '../hooks/useGlobal'

const Twitter = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="twitter-auth" className="flex items-center my-2">
      <span>Twitter Auth</span>
      <button
        onClick={() => handleSocialMediaAuthClick(twitterAuthProvider)}
        className="bg-blue-400 w-28 h-8 ml-2 rounded text-white"
      >
        Twitter Auth
      </button>
    </div>
  )
})

export default Twitter
