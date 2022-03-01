import { FC, memo } from 'react'
import Twitter from './Twitter'
import GitHub from './GitHub'
import Google from './Google'
import Email from './EmailPassword'
import { useMain } from '../hooks/useMain'

const Main: FC = memo(() => {
  const {
    handleNameChange,
    handleTextChange,
    handleClick,
    firebaeSignOut,
    message,
    messages,
    isLoading,
    isLogin,
    setIsLogin,
    user,
    setUser,
    firestoreMessages,
  } = useMain()

  if (isLoading) return <>Loaging...</>

  if (!isLogin) {
    return (
      <>
        <Twitter setIsLogin={setIsLogin} user={user} setUser={setUser} />
        <GitHub setIsLogin={setIsLogin} user={user} setUser={setUser} />
        <Google setIsLogin={setIsLogin} />
        <Email setIsLogin={setIsLogin} />
      </>
    )
  }

  return (
    <>
      <h1>
        {user.nickname} is Logged in{' '}
        <button onClick={firebaeSignOut}>Logout?</button>
      </h1>

      <div style={{ display: 'flex' }}>
        <div style={{ margin: '10px' }}>
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
    </>
  )
})

export default Main
