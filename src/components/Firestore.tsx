import { useState, useEffect, useRef } from 'react'
import { firestoreAddDoc } from '../firebase/firestore/firestoreAddDoc'
import { firestoreGetDoc } from '../firebase/firestore/firestoreGet'
import { firestoreRemove } from '../firebase/firestore/firestoreRemove'
import { formatDate } from '../lib'
import Button from './parts/Button'

type Message = {
  key: string
  name: string
  text: string
  createdAt: any
  updatedAt: any
}
const Firestore = () => {
  const mountedRef = useRef(true)
  const [message, setMessage] = useState<Message>({
    key: '',
    name: '',
    text: '',
    createdAt: '',
    updatedAt: '',
  })

  const [firestoreMessages, setFirestoreMessages] = useState<Message[]>()

  const fetchFirestore = async () => {
    const docSnap = await firestoreGetDoc()

    const data = docSnap.docs.map((doc) => {
      const data = doc.data()

      return {
        key: doc.id,
        name: data.name,
        text: data.text,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      }
    })
    console.log(data)
    // MEMO: cleanup用
    if (!mountedRef.current) return null
    if (data.length === 0) {
      setFirestoreMessages([])
    } else {
      setFirestoreMessages([...data])
    }
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
  const handleClickPost = () => {
    firestoreAddDoc({ refName: 'messages', ...message })
    fetchFirestore()
  }

  const handleClickDelete = (key: string) => {
    firestoreRemove(key)
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
          <Button onClick={handleClickPost}>投稿</Button>
        </div>
        {firestoreMessages
          ? firestoreMessages.map((data: Message) => (
              <div key={data.key} className="h-8 my-1">
                {data.name}:{data.text}:
                {data.createdAt ? `${data.createdAt.toDate()}` : ''}:
                {data.updatedAt ? `${data.updatedAt.toDate()}` : ''}
                {/* TODO: 実装 */}
                <Button>更新</Button>
                <Button onClick={() => handleClickDelete(data.key)}>
                  削除
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default Firestore
