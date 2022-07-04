import { database } from './dataRef'
import { push, ref, serverTimestamp } from 'firebase/database'

export const dataPush = (props: any) => {
  push(ref(database, props.refName), {
    name: props.name,
    text: props.text,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}
