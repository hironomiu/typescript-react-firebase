import { useState, useEffect, useRef } from 'react'
import { Message } from '../types'
import { firestoreAddDoc } from '../firebase/firestore/firestoreAddDoc'
import { firestoreGetDoc } from '../firebase/firestore/firestoreGet'
import Button from './parts/Button'

const Firestore = () => {
  const mountedRef = useRef(true)
  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
  })

  const [firestoreMessages, setFirestoreMessages] = useState<Message[]>()

  const fetchFirestore = async () => {
    const docSnap = await firestoreGetDoc()

    const data = docSnap.docs.map((doc) => {
      const data = doc.data()
      return { key: doc.id, name: data.name, text: data.text }
    })
    // MEMO: cleanup用
    if (!mountedRef.current) return null
    setFirestoreMessages([...data])
  }

  useEffect(() => {
    fetchFirestore()
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
    firestoreAddDoc({ refName: 'messages', ...message })
    fetchFirestore()
  }

  return (
    <div>
      <div className="flex flex-col m-2">
        <h2>Firestore</h2>
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
  )
}

export default Firestore
