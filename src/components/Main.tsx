import { memo, useEffect } from 'react'
import { useMain } from '../hooks/useMain'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isLoginState, userState } from '../recoil'
import { signOut } from '../firebase/auth/signOut'

const Main = memo(() => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const isLogin = useRecoilValue(isLoginState)
  const user = useRecoilValue(userState)
  const navigate = useNavigate()

  const {
    handleNameChange,
    handleTextChange,
    handleClick,
    message,
    messages,
    isLoading,
    firestoreMessages,
  } = useMain()

  const firebaeSignOut = async () => {
    await signOut()
    setIsLogin(false)
  }

  useEffect(() => {
    if (!isLogin) {
      navigate('/auth')
    }
  }, [navigate, isLogin])

  if (isLoading) return <>Loaging...</>

  return (
    <main className="flex flex-col justify-center items-center">
      <h1>
        {user.nickname} is Logged in
        <button onClick={firebaeSignOut}>Logout?</button>
      </h1>

      <div>
        <div>
          <h2>RealTime Database</h2>
          <input
            type="text"
            placeholder="name"
            value={message.name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="text"
            value={message.text}
            onChange={handleTextChange}
          />
          <button onClick={handleClick}>投稿</button>
          {messages
            ? messages.map(
                (data: { key: string; name: string; text: string }) => (
                  <div key={data.key}>
                    {data.name}:{data.text}
                  </div>
                )
              )
            : null}
        </div>
        <div style={{ margin: '10px' }}>
          <h2>Firestore</h2>
          <input
            type="text"
            placeholder="name"
            value={message.name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="text"
            value={message.text}
            onChange={handleTextChange}
          />
          <button onClick={handleClick}>投稿</button>
          {firestoreMessages
            ? firestoreMessages.map(
                (data: { key: string; name: string; text: string }) => (
                  <div key={data.key}>
                    {data.name}:{data.text}
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </main>
  )
})

export default Main
