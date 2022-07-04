import React, { useState, useEffect, useRef } from 'react'
import { dataPush } from '../firebase/realtimeDatabase/dataPush'
import { queryRef } from '../firebase/realtimeDatabase/query'
import { Message, RealTimeDatabaseEntries } from '../types'
import { onValue } from 'firebase/database'
import Button from './parts/Button'
import { formatDate } from '../lib'

const RealTimeDatabase = () => {
  const mountedRef = useRef(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
  })

  const getData = (refName: string) => {
    onValue(queryRef(refName), (snapshot) => {
      const data = snapshot.val()
      if (!data) return
      const entries: RealTimeDatabaseEntries[] = Object.entries(data)
      const newData: Message[] = entries.map(
        (entry: RealTimeDatabaseEntries) => {
          const [key, message] = entry
          console.log(key, message)
          return { ...message, key }
        }
      )
      // MEMO: cleanup用
      if (!mountedRef.current) return null
      setMessages(newData)
    })
  }

  useEffect(() => {
    getData('messages')
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, name: e.target.value })
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, text: e.target.value })
  }
  const handleClick = () => {
    dataPush({ refName: 'messages', ...message })
  }

  return (
    <div className="flex flex-col m-2">
      <h2>RealTime Database</h2>
      <div>
        <input
          type="text"
          placeholder="name"
          value={message.name}
          onChange={handleNameChange}
          className="border-[1px] px-2 py-1 mr-1"
        />
        <input
          type="text"
          placeholder="text"
          value={message.text}
          onChange={handleTextChange}
          className="border-[1px] px-2 py-1 mr-1"
        />
        <Button onClick={handleClick}>投稿</Button>
      </div>

      {messages.map((data: Message) => (
        <div key={data.key}>
          {data.name}:{data.text}:
          {data.createdAt ? formatDate(new Date(data.createdAt)) : null}:
          {data.updatedAt ? formatDate(new Date(data.updatedAt)) : null}
        </div>
      ))}
    </div>
  )
}

export default RealTimeDatabase
