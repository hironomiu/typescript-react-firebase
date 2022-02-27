import { useState, useEffect, useCallback } from 'react'
import { onValue } from 'firebase/database'
import { signOut } from '../firebase/auth/signOut'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { dataPush } from '../firebase/realtime-database/dataPush'
import { dataRef } from '../firebase/realtime-database/dataRef'
import { queryRef } from '../firebase/realtime-database/query'

type Message = {
  key: string
  name: string
  text: string
}

export const useMain = () => {
  const [messages, setMessages] = useState<Message[]>()

  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
  })
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const firebaeSignOut = useCallback(async () => {
    await signOut()
    setIsLogin(false)
  }, [])

  useEffect(() => {
    setIsloading(true)
    onValue(queryRef('messages'), (snapshot) => {
      const data = snapshot.val()
      if (!data) return
      const entries = Object.entries(data)
      // TODO 型
      const newData: Message[] = entries.map((entry: [string, any]) => {
        const [key, message] = entry
        return { key, ...message }
      })
      setMessages(newData)
      setIsloading(false)
    })
  }, [setMessages])

  // TODO ./firebase/realtime-database配下にライブラリとして配置可能なものは移動する
  // useEffect(() => {
  //   setIsloading(true)
  //   onValue(dataRef('messages'), (snapshot) => {
  //     const data = snapshot.val()
  //     if (!data) return
  //     const entries = Object.entries(data)
  //     // TODO 型
  //     const newData: Message[] = entries.map((entry: any) => {
  //       const [key, message] = entry
  //       return { key, ...message }
  //     })
  //     setMessages(newData)
  //     setIsloading(false)
  //   })
  // }, [setMessages])

  useEffect(() => {
    // TODO 外に出す
    setIsloading(true)
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
      setIsloading(false)
    })
  }, [setIsloading, setIsLogin])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, name: e.target.value })
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, text: e.target.value })
  }
  const handleClick = () => {
    dataPush({ refName: 'messages', ...message })
  }
  return {
    handleNameChange,
    handleTextChange,
    handleClick,
    firebaeSignOut,
    message,
    messages,
    isLoading,
    setIsloading,
    isLogin,
    setIsLogin,
  }
}
