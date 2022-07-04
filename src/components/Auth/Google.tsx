import { memo } from 'react'
import { googleAuthProvider } from '../../firebase/auth/googleAuthProvider'
import { useGlobal } from '../../hooks/useGlobal'
const Google = memo(() => {
  const { handleSocialMediaAuthClick } = useGlobal()
  return (
    <div id="google-auth" className="flex items-center m-2">
      <button onClick={() => handleSocialMediaAuthClick(googleAuthProvider)}>
        <img
          src="/images/google.png"
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </button>
    </div>
  )
})

export default Google
