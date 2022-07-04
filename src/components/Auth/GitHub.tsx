import { memo } from 'react'
import { githubAuthProvider } from '../../firebase/auth/githubAuthProvider'
import { useGlobal } from '../../hooks/useGlobal'
const GitHub = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="github-auth" className="flex items-center m-2">
      <button onClick={() => handleSocialMediaAuthClick(githubAuthProvider)}>
        <img
          src="/images/github.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </button>
    </div>
  )
})

export default GitHub
