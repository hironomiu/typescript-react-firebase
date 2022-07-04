import { useState, useEffect } from 'react'
import { dataPush } from '../firebase/realtime-database/dataPush'
import { Message } from '../types'
import { onValue } from 'firebase/database'
import { queryRef } from '../firebase/realtime-database/query'

const RealTimeDatabase = () => {
  const [messages, setMessages] = useState<Message[]>()
  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
  })

  useEffect(() => {
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
    })
  }, [setMessages])
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
