import { memo } from 'react'
import { githubAuthProvider } from '../firebase/auth/githubAuthProvider'
import { useGlobal } from '../hooks/useGlobal'

const GitHub = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="github-auth" className="flex items-center my-2">
      <span>GitHub Auth</span>
      <button
        onClick={() => handleSocialMediaAuthClick(githubAuthProvider)}
        className="bg-blue-400 w-28 h-8 ml-2 rounded text-white"
      >
        GitHub
      </button>
    </div>
  )
})

export default GitHub
