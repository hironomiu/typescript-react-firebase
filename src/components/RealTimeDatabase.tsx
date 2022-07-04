import { useState, useEffect, useRef } from 'react'
import { dataPush } from '../firebase/realtimeDatabase/dataPush'
import { queryRef } from '../firebase/realtimeDatabase/query'
import { Message } from '../types'
import { onValue } from 'firebase/database'

const RealTimeDatabase = () => {
  const mountedRef = useRef(true)
  const [messages, setMessages] = useState<Message[]>()
  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
  })

  const getData = (name: string) => {
    onValue(queryRef(name), (snapshot) => {
      const data = snapshot.val()
      if (!data) return
      const entries: [string, { name: string; text: string }][] =
        Object.entries(data)
      const newData: Message[] = entries.map(
        (entry: [string, { name: string; text: string }]) => {
          const [key, message] = entry
          return { key, ...message }
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
  }, [setMessages])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, name: e.target.value })
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, text: e.target.value })
  }
  const handleClick = () => dataPush({ refName: 'messages', ...message })

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
        <button
          onClick={handleClick}
          className="bg-blue-400 w-28 h-8 ml-2 rounded text-white"
        >
          投稿
        </button>
      </div>

      {messages
        ? messages.map((data: { key: string; name: string; text: string }) => (
            <div key={data.key}>
              {data.name}:{data.text}
            </div>
          ))
        : null}
    </div>
  )
}

export default RealTimeDatabase
