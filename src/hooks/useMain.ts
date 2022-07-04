import { useState, useEffect } from 'react'
import { onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { dataPush } from '../firebase/realtime-database/dataPush'
import { queryRef } from '../firebase/realtime-database/query'
import { firestoreAddDoc } from '../firebase/firestore/firestoreAddDoc'
import { firestoreGetDoc } from '../firebase/firestore/firestoreGet'
import { Message } from '../types'

import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isLoginState, userState } from '../recoil'

export const useMain = () => {
  const setIsLogin = useSetRecoilState(isLoginState)
  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)

  const [messages, setMessages] = useState<Message[]>()
  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
  })
  const [firestoreMessages, setFirestoreMessages] = useState<Message[]>()
  const [isLoading, setIsloading] = useState<boolean>(false)

  // TODO データ投稿時の再取得
  useEffect(() => {
    ;(async () => {
      const docSnap = await firestoreGetDoc()

      const data = docSnap.docs.map((doc) => {
        const data = doc.data()
        return { key: doc.id, name: data.name, text: data.text }
      })

      setFirestoreMessages([...data])
    })()
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

  useEffect(() => {
    // TODO 外に出す
    setIsloading(true)
    const auth = getAuth()
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        if (userData.displayName) {
          const email = userData.email ? userData.email : ''
          // TODO 共通化
          setUser({
            ...user,
            nickname: userData.displayName,
            email: email,
          })
        }
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
      setIsloading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, name: e.target.value })
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, text: e.target.value })
  }
  const handleClick = () => {
    dataPush({ refName: 'messages', ...message })
    firestoreAddDoc({ refName: 'messages', ...message })
  }

  return {
    handleNameChange,
    handleTextChange,
    handleClick,
    message,
    messages,
    isLoading,
    setIsloading,
    firestoreMessages,
    setFirestoreMessages,
  }
}
