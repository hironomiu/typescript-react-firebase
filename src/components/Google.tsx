import { memo } from 'react'
import { googleAuthProvider } from '../firebase/auth/googleAuthProvider'
import { useGlobal } from '../hooks/useGlobal'
const Google = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()

  return (
    <div id="google-auth" className="flex items-center my-2">
      <span>Google Auth</span>
      <button
        onClick={() => handleSocialMediaAuthClick(googleAuthProvider)}
        className="bg-blue-400 w-28 h-8 ml-2 rounded text-white"
      >
        Google
      </button>
    </div>
  )
})

export default Google
