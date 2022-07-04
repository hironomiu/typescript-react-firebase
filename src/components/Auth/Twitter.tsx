import { memo } from 'react'
import { twitterAuthProvider } from '../../firebase/auth/twitterAuthProvider'
import { useGlobal } from '../../hooks/useGlobal'

const Twitter = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="twitter-auth" className="flex items-center m-2">
      <button onClick={() => handleSocialMediaAuthClick(twitterAuthProvider)}>
        <img
          src="/images/twitter.png"
          alt=""
          className="h-10 w-10 rounded-full"
        />
      </button>
    </div>
  )
})

export default Twitter
